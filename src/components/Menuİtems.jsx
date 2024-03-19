import React, { useState } from 'react'
import Prewiew from './Prewiew';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { addCart, removeItem } from '../store/slices/CartSlice';
import {useDispatch, useSelector } from 'react-redux';
import { 
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material'

const Menuİtems = ({ Image , name, contant, price, id }) => {
  const [click, setClick] = useState(false)

  const dispatch = useDispatch()
  const { quantity, cartItems } = useSelector((store) => store.cart);
  const handleCard = () => {
    setClick(true)
  }
  const handleAddCard = (event) => {
    event.stopPropagation();
    dispatch(addCart({ Image, name, price, id }))
  }

  const handleRemoveCard = (event) => {
    event.stopPropagation();
    dispatch(removeItem({ id }))
  }

  const item = cartItems.find(item => item.id === id);
  const itemAmount = item ? item.itemAmount : 0;
  return (
    <>
        <Card sx={{
          width:"250px"
        }} className='card' onClick={handleCard}>
          <CardMedia height="150" component="img" image={Image}/>
          <CardContent>
            <Typography variant="h5" component="div">{name}</Typography>
            <Typography variant="body2" component="p" color='gray'>{contant}</Typography>
          </CardContent>
          <CardActions>
            <Button algin="center" color='error' onClick={handleAddCard}>
              Add Cart
            </Button>
            <Typography variant="h6" component="p" fontSize='medium' color="green" style={{marginLeft:"80px" }}>${price}</Typography>
          </CardActions>
          <div className='Line'></div>
          <CardActions style={{backgroundColor:"#F4F1F1",display:"flex", alignItems:"center", justifyContent:"center", justifyItems:"center"}}>
          <Button algin="center" color='error' size='small' className='ActionBtns' onClick={handleRemoveCard}>
              <FaAngleLeft fontSize="18px"/>
          </Button>
          <Typography variant="h6" component="p" fontSize='medium' color="green">{itemAmount}</Typography>
          <Button algin="center" color='error' size='small' className='ActionBtns' onClick={handleAddCard}>
              <FaAngleRight fontSize="18px"/>
          </Button>
          </CardActions>
        </Card>
        {click ? <Prewiew id={id} Image={Image} name={name} contant={contant} price={price} itemAmount={itemAmount} setClick={setClick}/> : null}
    </>
  )
}

export default Menuİtems
