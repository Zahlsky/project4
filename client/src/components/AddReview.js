import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Container } from 'react-bootstrap'
import { TextField } from '@mui/material'
import Slider from '@mui/material/Slider'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import jwtDecode from 'jwt-decode'




const AddReview = () => {

  
  const token = localStorage.getItem('BAOToken')
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
  console.log('token ->', token)
 

  

  const { id } = useParams()
  console.log(id)

  //when coming back to page, scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const [data, setData] = useState({
    rating: '',
    title: '',
    text: '',
    owner: '',
    album: `${id}`,
  })

  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [login, setLogin] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
    setError('')
    
    console.log('data being logged->', data)
  }

  //
  const onSubmit = async (event) => {

    event.preventDefault()

    try {
      // API request -> POST req
      const res = await axios.post('/api/reviews/', data)
      //save the response
      setMessage(res.data.message)
      //WAIT and go to 
      // setTimeout(navigate('/userprofile'), 4000)

      navigate(`/album/${id}`)
    } catch (error) {
      console.log(error)

      if (error.response.data.message === 'Unauthorized - No token provided') {
        setError('please log in to leave a Review')
        setLogin(true)
      } else { 
        setError(error.response.data.message) 
      }



      //! error on forms
      //helperText={error ? 'Incorrect entry' : false}
      //error={error ? true : false }
    }
  }

  // getAriaValueText={data.rating} 
  

  return (
    <main className='form-page'>
      <Container>
        <Row>
          <form className='form' onSubmit={onSubmit}>
            <h3 className='text-center'>Your Review</h3>
            <div className='submitbox'>
              <div>Rating *</div>
              <Slider aria-label='Rating' defaultValue={1} valueLabelDisplay='auto' step={1} marks min={1} max={5} onChange={handleChange} name='rating' />
              <TextareaAutosize required className='form-input autosize' id='outlined-required' minRows={2} name='text' placeholder='Text *' value={data.text} onChange={handleChange} />
              {error && <div className='error-mex'>{error}</div>}
              {login && <Link className='user-page-btn navigatebtn ' as='btn' to='/login' >Go to log in </Link>} 
              <input type='submit' value='Submit review' className='submitbtn' />
              {message && <div className='oksubmit'>{message}</div>}
            </div>
          </form>
        </Row>
      </Container>
    </main>
  )
}
export default AddReview