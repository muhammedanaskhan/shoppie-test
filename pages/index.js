import React from 'react'
import Header from '/components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import ShopProducts from '../components/ShopProducts/ShopProducts'
import Footer from '../components/Footer/Footer'

function index() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <ShopProducts/>
        <Footer/>
    </div>
    
  )
}

export default index