import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <div className='content'>
      <Navbar/>
      <div className='colors-btn'>
      <Sidebar/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App


