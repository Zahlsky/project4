import { TextField } from '@mui/material'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'
import Uploading from './Uploading.js'



const Register = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })

  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [pwError, setPwError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [userError, setUserError] = useState('')

  //update data with each change
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
    //reset error
    setError('')
    setPwError('')
    setEmailError('')
    setUserError('')
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    console.log(data)
    

    try {
      // API request -> POST req to login
      await axios.post('/api/auth/register/', data)
      
      console.log(data)
      //setError(null)
      //go to 
      navigate('/login')

    } catch (error) {
      console.log(error)

      setError(error.response.data)

      if (error.response.data === 'Passwords do not match.') {
        setPwError('yep')
      }
      if (error.response.data === 'User with this email already exists') {
        setEmailError('yep')
      }
      if (error.response.data === 'User with this username already exists') {
        setUserError('yep')
      }


    }
  }



  return (
    <main className='form-page'>
      <Container>
        <Row>
          <form className='form' onSubmit={onSubmit}>
            <h3 className='text-center'>Register</h3>
            
            {/* add value={formData.username; .email; .password; .passwordConfirmation} */}
            <TextField required error={userError ? true : false} className='form-input' id='outlined-required' name='name' label='name' value={data.name} onChange={handleChange} />           
            <TextField required error={emailError ? true : false} className='form-input' id='outlined-required 2' name='email' label='email' value={data.email} onChange={handleChange} />
            <TextField required error={userError ? true : false} className='form-input' id='outlined-required' name='username' label='username' value={data.username} onChange={handleChange} />
            <TextField required error={pwError ? true : false} className='form-input' id='outlined-password-input' type='password' name='password' label='password' value={data.password} onChange={handleChange} />
            <TextField required error={pwError ? true : false} className='form-input' id='outlined-password-input 2' type='password' name='password_confirmation' label='Confirm Password' value={data.password_confirmation} onChange={handleChange} />
            
            <Uploading name='profile_image' setData={setData} data={data}/>

            {error && <div className='error-mex'>{error}</div>}

            <input type='submit' value='Register' className='submitbtn-fixed' />
            
          </form>
        </Row>
      </Container>
    </main>
  )
}

export default Register