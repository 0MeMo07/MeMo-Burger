import React from 'react'
import Background from '../assets/bacground.png'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import { Button } from '@mui/material'
import Footer from './Footer'
const Home = () => {
  return (
    <>
    <div className='mainPage' style={{backgroundImage: `url(${Background})`}}>
    <div className='Center-Container'>
        <div className='order'>
            <h1 className='GoText'>Welcome to Memo Burger, click to go to the menu.</h1>
            <Link to="/menu">
                <Button variant="contained" color='error'>Go To Menu</Button>
            </Link>
        </div>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Home
