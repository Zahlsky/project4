/* eslint-disable camelcase */

import { useState, useEffect } from 'react'
import axios from 'axios'
import GuardianLogo from '../images-for-project4/guardianlogo.jpg'
import PitchforkLogo from '../images-for-project4/pitchfork-logo.jpg'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import { LinearProgress } from '@mui/material'

const SingleAlbum = () => {

  const { id } = useParams()
  const [album, setAlbum] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/albums/${id}`)
        setAlbum(data)
        console.log(data)

      } catch (error) {
        setErrors(true)
      }
    }
    getData()
  }, [id])

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
                  <img src={GuardianLogo} alt='Guardian logo' /><span>{album.critic1_rating}/10</span><p>read full review here</p>
                  <img src={PitchforkLogo} alt='Guardian logo' /><span>{album.critic1_rating}/10</span><p>read full review here</p>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
          </Row>

          {/* <Row>
            {(album.reviews).map(review => {
              const { id, reviews, owner } = review
              console.log(review)

              return (
                <>
                  <div className='album-container'>
                    <div className='user-review'>
                      {review.owner}
                    </div>
                  </div>
                </>
                
                
              )
            })}

          </Row> */}
          
      
      
    
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