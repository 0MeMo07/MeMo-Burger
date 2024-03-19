import React from 'react';
import { IoMdClose } from "react-icons/io";
import {useDispatch } from 'react-redux';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { addCart, removeItem } from '../store/slices/CartSlice';
import { Card, CardContent, CardMedia, Typography, Container, Button, CardActions } from '@mui/material';

const Preview = ({ Image, name, contant, price, setClick, id, itemAmount }) => {
  const dispatch = useDispatch()
  const handleClose = () => {
        setClick(false)
    }
  const handleAddCard = () => {
      dispatch(addCart({ Image, name, price, id }))
    }

  const handleRemoveCard = (event) => {
    event.stopPropagation();
    dispatch(removeItem({ id }))
  }
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      zIndex: 9999
    }}>

      <Container className='prewiewCart' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Card sx={{ maxWidth: 400}}>
          <IoMdClose fontSize="40px" style={{float:"right", cursor:"pointer"}} onClick={handleClose}/>
          <CardMedia
            component="img"
            image={Image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='Prewiew-Name'>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='Prewiew-Contact'>
              {contant}
            </Typography>
            <CardActions style={{justifyContent:'space-between'}} >
                <Button zIndex="12" variant="contained" algin="center" color='error' size="medium" onClick={handleAddCard}>
                Add Cart
                </Button>
              <CardActions style={{zIndex:"1",display:"flex", alignItems:"center", justifyContent:"center", justifyItems:"center"}}>
              <Button algin="center" color='error' size='small' className='ActionBtns' onClick={handleRemoveCard}>
              <FaAngleLeft fontSize="18px"/>
              </Button>
              <Typography variant="h6" component="p" fontSize='medium' color="green">{itemAmount}</Typography>
              <Button algin="center" color='error' size='small' className='ActionBtns' onClick={handleAddCard}>
                  <FaAngleRight fontSize="18px"/>
              </Button>
              </CardActions>
              <Typography variant="h6" component="p" size="large" color="green" >${price}</Typography>
            </CardActions>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Preview;
