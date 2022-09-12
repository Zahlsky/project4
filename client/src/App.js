import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import SingleAlbum from './components/SingleAlbum'




function App() {
  useEffect(() => {
    const token = localStorage.getItem('BAOToken')
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
  }, [])

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Main />}></Route>
          <Route path='/album/:id/' element={<SingleAlbum />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
