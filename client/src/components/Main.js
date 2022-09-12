import { useState, useEffect } from 'react'
import axios from 'axios'




const AllAlbums = () => {
  
  const [AllAlbums, setAllAlbums] = useState([])
  
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/albums/')
        setAllAlbums(data)
        console.log(data)

      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
}

export default AllAlbums