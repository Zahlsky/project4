import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import SingleAlbum from './components/SingleAlbum'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import AddReview from './components/AddReview'
import UserProfile from './components/UserProfile'




function App() {
  useEffect(() => {
    const token = localStorage.getItem('BAOToken')
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
  }, [])

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/album/:id/' element={<SingleAlbum />}></Route>
          <Route path='album/:id/addreview' element={<PrivateRoute><AddReview /></PrivateRoute>}></Route>
          <Route path='/userprofile/:id' element={<UserProfile />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
