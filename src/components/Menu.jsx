import React from 'react'
import { Data } from '../helpers/Data'
import Menuİtems from './Menuİtems'
import '../css/menu.css'
const Menu = () => {
  return (
    <>
      <div className='menu'>
        <div className='menuTitle'>
          
          <h1 className='Title'>Menu</h1>
          <div className='Line'></div>
          <div className='menuList'>
              {Data.map((menuItem, index)=>{
                  return <Menuİtems 
                  Image={menuItem.image} 
                  name={menuItem.name} 
                  contant={menuItem.contant} 
                  price={menuItem.price}
                  id={menuItem.id} 
                  itemAmount={menuItem.itemAmount}
                  key={index}/>
              })}
          </div>

        </div>
      </div>
    </>
  )
}

export default Menu
