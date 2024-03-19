import { useState } from 'react';
import BurgerLogo from '../assets/Logo.png' 
import '../css/NavBar.css'
import { Link } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useMediaQuery } from '@mui/material';
import Cart from './Cart'
import { useSelector } from 'react-redux';
import { AppBar, Container, IconButton, Avatar, Drawer, ListItem, List, ListItemText, Paper } from '@mui/material'

const NavBar = () => {
const [cartOpen, setCartOpen] = useState(false)
const [mobilcartOpen, setMobilCartOpen] = useState(false)
const [isDrawerOpen, setDrawerOpen] = useState(false);
const isMobile = useMediaQuery('(max-width:900px)');

const { quantity } = useSelector((store) => store.cart)

const toggleDrawer = (open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  setDrawerOpen(open);
};
const handleOpenCart = () => {
  setCartOpen(true)
  if(cartOpen === true){
    setCartOpen(false)
  }
}

const handleMobileOpenCart = () => {
  setMobilCartOpen(true)
  if(mobilcartOpen === true){
    setMobilCartOpen(false)
  }
}
  return (
    <>
    
      {/* <div className='NavBar'>
        <i></i>
        <div className='main'>
            <img src={BurgerLogo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/About">About Us</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
      </div> */}


      <AppBar className='NavBar' style={{ justifyContent: 'center', width: '50%', backgroundColor:"rgba(255, 0, 0, 0.7)" }}>
        <Container className='main'>
          <Avatar src={BurgerLogo} alt="" />
          {isMobile ? (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <IoIosMenu />
            </IconButton>
          ) : (
            <>
            <div>
              <Link to="/">Home</Link>
              <Link to="/About">About Us</Link>
              <Link to="/Menu">Menu</Link>
              <Link to="/Contact">Contact</Link>
              
            </div>
            <div>
              {
              0 < quantity 
              &&
              <div>
              <p className='quantity' style={{position:'fixed',top: '0', margin: 'auto'}}>{quantity}</p>
              </div>
              }
              {/* <div>
              <p className='quantity' style={{position:'fixed',top: '0', margin: 'auto'}}>{quantity}</p>
              </div> */}
              <IoCartOutline className='Cartİcon' onClick={handleOpenCart}/>
              {cartOpen &&
                <div style={{ position: 'fixed', zIndex: '9999' }}>
                    <Cart />
                </div>
              }
            </div>
            </>
          )}
      
        </Container>
       
      </AppBar>
      {mobilcartOpen &&
          <div style={{ position: 'fixed', zIndex: '9' }} className='MobilCartMenu'>
              <Cart />
          </div>
        }
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/About">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/Menu">
              <ListItemText primary="Menu" />
            </ListItem>
            <ListItem button component={Link} to="/Contact">
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button onClick={handleMobileOpenCart}>
              <IoCartOutline className='MobilCartİcon'/>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  )
}

export default NavBar
