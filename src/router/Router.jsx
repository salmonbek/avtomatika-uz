import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import New from '../pages/New'
import Service from '../pages/Service'
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import Header from '../components/header/Header'

const Router = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/new' element={<New />} />
      
      </Routes>
      
    </>
  )
}

export default Router