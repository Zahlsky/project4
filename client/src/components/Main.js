/* eslint-disable camelcase */

import { useState, useEffect } from 'react'
import axios from 'axios'
import HeroImage from '../images-for-project4/heroImage.png'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { LinearProgress } from '@mui/material'



const AllAlbums = () => {

  
  
  const [Albums, setAlbums] = useState([])
  const [errors, setErrors] = useState(false)
  
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/albums/')
        setAlbums(data)
        console.log(data)

      } catch (error) {
        setErrors(true)
      }
    }
    getData()
  }, [])

  return (
    <>
     
        
      <div className='hero-image'>
        <img src={HeroImage} />
      </div>
      
      <Row>
        { Albums.length ?
        
          (Albums).map(album => {
            const { id, artist, album_image, critic1_rating, critic2_rating, title } = album
            console.log(album_image)

            return (
              <>
                <Link to={`/album/${id}`}>
                  <div className='album-container'>
                    <div className='title'>
                      {artist} - {title} 
                    </div>
                    <img className='album-image' loading='lazy'src={album_image} alt={title}/>
                    <div>critic score <span>{(critic1_rating + critic2_rating) / 2}</span></div>
                  </div>
                </Link>
              </>

              
              
            )
          })
          :
          <h2>
            {errors ? 'Something went wrong, Please try again Later' : <div className="loading-bar"> <br /> <LinearProgress color="success" /> </div>}
          </h2>
        }

      </Row>
  
        
    
    </>
  )
}

export default AllAlbums