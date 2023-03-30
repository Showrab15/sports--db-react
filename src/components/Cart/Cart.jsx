import React from 'react';
import './Cart.css';




const Cart = (props) => {
 
    const cart = props.cart
    console.log(cart.name);

let pl ='';
let quantity =0;
let totalPrice = 0;
for(const player of cart){

    player.quantity =  player.quantity || 1;

totalPrice = totalPrice + player.price * player.quantity;

quantity= quantity + player.quantity;
 pl =   pl + player.name+','+    "   " 

}
const tax = totalPrice * 5 / 100 ;
const total = totalPrice + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            
            <p>Selected Players :  {quantity}</p> 
            <p>Selected Players :  {pl}</p> 
            <p>Price : ${totalPrice}</p> 
            <p>Tax : ${tax} </p>            
            <h5>Total Invested : ${total}</h5>

        </div>
    );
};

export default Cart;