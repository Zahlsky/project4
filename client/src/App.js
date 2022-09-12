import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'




function App() {
  useEffect(() => {
    const token = localStorage.getItem('BAOToken')
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
