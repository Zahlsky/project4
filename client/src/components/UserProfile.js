/* eslint-disable camelcase */
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Row, Col, Container, Card, Carousel } from 'react-bootstrap'
import { Box } from '@mui/system'
import { LinearProgress } from '@mui/material'



const UserProfile = () => {
  function refreshPage() {
    window.location.reload()
  }
  const { id } = useParams()  
  //when coming back to page, scroll to top
  useEffect(() => {
    window.scrollTo( { top: 0, left: 0, behavior: 'smooth' } )
  }, [])

  //get all properties
  const [userData, setUserData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem('BAOToken')
        axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
        
        const { data } = await axios.get(`/api/auth/profile/${id}`)
        setUserData(data)
        console.log(data)
      } catch (error) {
        console.log(error)
        setError(error.response.data.message)
      }
    }
    getData()
  }, [])



  const { username, profile_image, reviews } = userData



  console.log(username, profile_image, reviews)

  const handleDelete = async (id) => {
    try {
      console.log( { id } )
      const deleteReview = await axios.delete(`api/reviews/${id}`)
      console.log('button clicked to delete review ->', deleteReview)

      
      refreshPage()

    } catch (error) {
      console.log(error)
    }
  }


 
  return (
    <>
      {profile_image ?

        <Container as='main'>
          <Row className="mt-5">
            <h1>Welcome <span>{username}</span></h1>
            <div className='user-review-container'>
              <div className='user-image-container'> <img src={profile_image} alt="profile" /> 
                <h3>Your Reviews:</h3>
              </div>
        
              
              {reviews.map(review => {
                const { id, rating, text } = review
                return (
                  <>
                    <div className='user-reviews-container'>
                      {'⭐️'.repeat(rating)} - {text}
                      <button className="user-page-btn delete-review" onClick={() => handleDelete(id)}>Delete This Review</button> 

                    </div>
                  </>
                )
              })}
        
            </div>
          </Row>
        </Container>
        :
        <>
          {error ?
            <Box className="errorbox">
              {/* <div className='error-mex'>{error}</div>  */}
              <h2>Please log in to see your profile</h2>
              <Link className="user-page-btn navigatebtn " as="btn" to="/login" >Go to log in </Link>
              < br />
            </Box>
            :
            <div className="loading-bar"> <br /> <LinearProgress color="success" /> </div>}
        </>
      }
    </>
  )

}


export default UserProfile