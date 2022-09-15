import { useState } from 'react'
import { Container, FormGroup } from 'react-bootstrap'
import axios from 'axios'

const Uploading = ({ setData, data }) => {

  const [loading, setLoading] = useState(false)

  const UploadImage = async (e) => {
    const files = e.target.files
    const formData = new FormData()
    formData.append( 'file', files[0])
    formData.append('upload_preset', 'erm5g0re')
    setLoading(true)
    const res = await fetch('https://api.cloudinary.com/v1_1/de7a2ht2c/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    )
    const File = await res.json()
    console.log(File.secure_url)
    setData({ ...data, profile_image: File.secure_url })
    setLoading(false)
  }
  return ( <div>
    <Container className='image-upload-container'>
      <h5>Upload Image</h5>
      <FormGroup className='image-upload-buttons'>
        <input type='file' name='file' placeholder='Upload image here' onChange={UploadImage} />
        <br />
        {loading ? (<h3>Loading...</h3>) : <img src={data.profile_image} style={{ width: '200px' }}/>}
      </FormGroup>
    </Container>
  </div>)
}




export default Uploading