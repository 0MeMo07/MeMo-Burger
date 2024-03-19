import { MdDelete } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { TbMoodEmpty } from "react-icons/tb";
import CartEmpty from '../assets/CartEmpty.png'
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Typography,
  CardActions
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addCart ,removeItem, removeAllItemsById } from '../store/slices/CartSlice';

const ShoppingCart = () => {
  const { quantity, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.itemAmount), 0);
  };
  

  const handleDelete = (id) => {
    dispatch(removeAllItemsById({ id }))
  };


  const handleAddCard = (event, id, price, name, Image) => {
    event.stopPropagation();
    dispatch(addCart({ Image, name, price, id }))
  }

  const handleRemoveCard = (event, id) => {
    event.stopPropagation();
    dispatch(removeItem({ id }))
  }


  return (
    <div className="MainDiv" style={{backgroundColor:"white", borderRadius:"10px",width:"300px", height:"auto", padding:"20px", color:"black"}}>
      <Typography variant="h5" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      <div className="Line"></div>
      <List>
        {
        quantity < 1 
        ? 
        <div style={{display:"flex", justifyContent:"center"}}> 
          <img src={CartEmpty} style={{display:"flex", zIndex:"10", justifyContent:"center", justifyItems:"center", textAlign:"center",width:"100px",opacity:"0.1"}}/> 
          <h3 style={{position:"absolute",opacity:"0.2",zIndex:"11",display:"flex", fontFamily:"sans-serif", textAlign:"center", justifyContent:"center", fontSize:"25px"}}>
          Cart Is Empty
          </h3>
        </div>
        :
        cartItems.map((item) => (
          <div key={item.id}>
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.Image} />
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={`$${item.price}`}  />
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", justifyItems:"center", flexDirection:"column"}}>
              <Button algin="center" color='error' size='small' className='ActionBtns' onClick={(event) => handleRemoveCard(event, item.id)}>
                  <FaAngleLeft fontSize="18px"/>
              </Button>
              <Typography variant="h6" component="p" fontSize='medium' color="green">{item.itemAmount}</Typography>
              <Button algin="center" color='error' size='small' className='ActionBtns' onClick={(event) => handleAddCard(event, item.id, item.price, item.name, item.Image)}>
                  <FaAngleRight fontSize="18px"/>
              </Button>
            </div>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                <MdDelete/>
              </IconButton>
            </ListItemSecondaryAction>
           
          </ListItem>
          <div className="Line"></div>
          </div>
        ))
        
        }
         
      </List>
      <Typography variant="h6" align="center" gutterBottom>
        Total: ${getTotalPrice()}
      </Typography>
      <Button variant="contained" color="error" fullWidth>
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;
