import React from 'react'
import backgroundImagee from '../assets/bacground.png'
import '../css/About.css'
const About = () => {
  return (
    <div>
      <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${backgroundImagee})`}}>

        </div>

        <div className='aboutBottom'>
            <h1 style={{textAlign:'center'}}>About Us</h1>
            <div className='Line'></div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti incidunt quod quasi sequi tempore soluta laudantium dolore id explicabo ad minima in non molestias ex, expedita cumque vitae voluptate hic?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti incidunt quod quasi sequi tempore soluta laudantium dolore id explicabo ad minima in non molestias ex, expedita cumque vitae voluptate hic?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti incidunt quod quasi sequi tempore soluta laudantium dolore id explicabo ad minima in non molestias ex, expedita cumque vitae voluptate hic?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti incidunt quod quasi sequi tempore soluta laudantium dolore id explicabo ad minima in non molestias ex, expedita cumque vitae voluptate hic?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti incidunt quod quasi sequi tempore soluta laudantium dolore id explicabo ad minima in non molestias ex, expedita cumque vitae voluptate hic?

            </p>
        </div>
      </div>
    </div>
  )
}

export default About
