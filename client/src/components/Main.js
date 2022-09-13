/* eslint-disable camelcase */

import { useState, useEffect } from 'react'
import axios from 'axios'
import HeroImage from '../images-for-project4/heroImage.png'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const AllAlbums = () => {

  
  
  const [Albums, setAlbums] = useState([])
  
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/albums/')
        setAlbums(data)
        console.log(data)

      } catch (error) {
        console.log(error)
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
        {(Albums).map(album => {
          const { id, artist, album_image, critic1_rating, critic2_rating, title } = album
          console.log(album_image)

          return (
            <>
              <div className='album-container'>
                <div className='title'>
                  {artist} - {title} 
                </div>
                <img className='album-image' loading='lazy'src={album_image} alt={title}/>
                <div>critic score <span>{(critic1_rating + critic2_rating) / 2}</span></div>
              </div>
            </>
            
            
          )
        })}

      </Row>
        
    
    </>
  )
}

export default AllAlbums