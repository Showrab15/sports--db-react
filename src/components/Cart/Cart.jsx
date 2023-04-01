import React from 'react';
import './Cart.css';




const Cart = (props) => {
 
    const cart = props.cart
    // console.log(cart.name);

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

<div id="plname" className="text-center">
<h5 className="fw-bold mt-3">Order Summary</h5>

</div>
            
<div  id="plname"  className=" mt-2 text-center">
            <p className='mt-3'>total  Players :  {quantity}</p> 
</div>

<div id="plname" className=" mt-2 text-start ">
<p>Selected Players :  {pl}</p> 
</div>

<div id="plname" className=" mt-2 text-center ">
<p className='mt-3'>Price : ${totalPrice}</p> 
</div>
 
<div id="plname" className=" mt-2 text-center">
<p className="mt-3">Tax : ${tax} </p>            
</div>

<div id="plname" className=" mt-2 text-center">
<h4 className='fw-bold mt-3'>Total  : ${total}</h4>
</div>

        </div>
    );
};

export default Cart;