/* eslint-disable camelcase */

import { useState, useEffect } from 'react'
import axios from 'axios'
import PitchforkLogo from '../images-for-project4/pitchfork-logo.jpg'
import GuardianLogo from '../images-for-project4/guardianlogo.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useParams, Link } from 'react-router-dom'
import { LinearProgress } from '@mui/material'
import Card from 'react-bootstrap/Card'

const SingleAlbum = () => {

  const token = localStorage.getItem('BAOToken')
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
  console.log('token ->', token)

  const { id } = useParams()
  const [album, setAlbum] = useState(false)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/albums/${id}/`)
        setAlbum(data)
        console.log(data)

      } catch (error) {
        setErrors(true)
      }
    }
    getData()
  }, [id])


  
  // const userReview = Object.keys(userReviews).map((key => [(key), userReviews[key]]))
  // console.log('user review after objectKeys->', userReview)

 


  

  

  return (

    <Container as='main'>
      {album ? 
        <>
        
          
          <Row>

            <div className='album-container'>
              <div className='title'>
                {album.artist} - {album.title} 
              </div>
              <img className='album-image' src={album.album_image} alt={album.title}/>
              <div>critic score <span>{(album.critic1_rating + album.critic2_rating) / 2}</span></div>
              <div className='critic-review-container'>
                <div className='critic-review'>
                  <img src={GuardianLogo} alt='Guardian logo' /><span>{album.critic1_rating}/5</span><a href={album.critic1_link} target='_blank' rel='noopener noreferrer'><p>read full review here</p></a>
                  <img src={PitchforkLogo} alt='Guardian logo' /><span>{album.critic1_rating}/5</span><a href={album.critic2_link} target='_blank' rel='noopener noreferrer'><p>read full review here</p></a>
                </div>

                <div>
                  <Link className="btn" as="link" to={ `/album/${id}/addreview` }>Leave a review</Link>   
                  <h3>User Reviews</h3> 
                </div>
              </div>
            </div>
          </Row>

          <Row>
            <>
              
              { album && album.reviews.length ? 
              
                
                  
                album.reviews.map((review, idx) => {
                  const { text, owner, rating } = review

                  return (
                    <>

                      <div className='user-review-container'>
                        
                                        
                        <div key={idx} className='review-container'></div>

                        <Card
                          bg='dark'
                          text='white'
                          style={{ width: '18rem' }}
                          className="mb-5"
                        >
                          <Card.Header>{owner.username}</Card.Header>
                          <Card.Body>
                            <Card.Title>{'⭐️'.repeat(rating)}</Card.Title>
                            <Card.Text>
                              {text}
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        
                      </div>
                     
                    </>                     
                  )
                  

                })
                :
                <div className="review-container">
                  <h3 className="review-heading">Reviews:</h3>
                  <p className="review-para">There are no reviews for this album</p>
                  <Link className="btn navigatebtn-marginbt" as="link" to={`/review/${id}`}>Leave a review</Link>
                </div>
              }
                
                
              
            </>
          </Row>
          
        </>
        :
        <h2>
          {errors ? 'Something went wrong, Please try again Later' : <div className="loading-bar"> <br /> <LinearProgress color="success" /> </div>}
        </h2>
      }

    </Container>
  )


}

export default SingleAlbum