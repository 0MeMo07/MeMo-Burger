import React from 'react'
import '../css/Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
    <footer>
        <div className='footer'>
            <div className='socialMedia'>
                <Link to="https://instagram.com/mhmettyq"><FaInstagram/></Link>
                <Link to="https://github.com/0MeMo07"><FaGithub/></Link>
            </div>
            {/* <ul className="menu">
                <li className="menu__item">
                <Link className="FooterText" to="/">
                    Home
                </Link>
                </li>
                <li className="menu__item">
                <Link className="FooterText" to="/about">
                    About Us
                </Link>
                </li>
                <li className="menu__item">
                <Link className="FooterText" to="/menu">
                    Menu
                </Link>
                </li>
                <li className="menu__item">
                <Link className="FooterText" to="/contact">
                    Contact
                </Link>
                </li>
            </ul> */}
        <p>©2024 MeMo | All Rights Reserved</p>
        </div>
    </footer>
    </>
  )
}

export default Footer
