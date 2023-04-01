import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import PlayerCard from '../PlayerCard/PlayerCard';
import './Shop.css';
import Swal from 'sweetalert2'

const Shop = () => {


   const [players, setPlayers]= useState([]);

const [cart, setCart] = useState([]);

const [dltCart, setDltCart] = useState([]);

useEffect(()=>{
    fetch('test.json')
    .then(res => res.json())
    .then(data => {
        setPlayers(data.players)
        // console.log(data.players)

    })
},[])


useEffect(()=>{
    const storedCart = getShoppingCart()
    const savedCart =[]
    // console.log(storedCart);
    // step-1 : get the id of storedCart
    for(const id in storedCart){
        //  console.log(idMeal)
        //step-2: get meal from meals by using id
        const addedMeal = players.find(player => player.id === id);
        if(addedMeal){
            //step-3: add quantity 
            const quantity = storedCart[id];
            addedMeal.quantity = quantity;
            // step add the added meal to the saved cart
            savedCart.push(addedMeal)
        }
        //  console.log(addedMeal)
       
    }
    setCart(savedCart)

},[dltCart])



// handler add to cart button with alert
const handleAddToCart = player =>{
    const newCart = [...cart, player];

    if(newCart.length === 12){
        
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry!You can Buy Only 11 Players',
              })  
              return newCart;

      
    }


    const storedCartFromStorage = getShoppingCart();
    for (const id in storedCartFromStorage) {
        if (player.id === id) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You already added this player! Add another one.',
            })

            // console.log('added');
            return newCart;
        }
    }


    // console.log(newCart);
    setCart(newCart);
    addToDb(player.id);
   
          

}








useEffect(()=>{
    const storedCart = getShoppingCart()
    const dltCart =[]
    // console.log(storedCart);
    // step-1 : get the id of storedCart
    for(const id in storedCart){
        //  console.log(idMeal)
        //step-2: get player from players by using id
        const addedPlayer = players.filter(player => player.id === id);
        if(addedPlayer){
            //step-3: add quantity 
            const quantity = storedCart[id];
            addedPlayer.quantity = quantity;
            // step add the added player to the saved cart
            dltCart.pop(addedPlayer)
            // delete 
        }
     

        //  console.log(addedPlayer)
       
    }
    setDltCart(dltCart)

},[dltCart])

















// handler for dlt cart

const handleDltCart = player =>{
    const removedCart = [...dltCart, player];
    const storedCartFromStorage = getShoppingCart();
for(const id in storedCartFromStorage){
    if(player.id ===id){
        console.log('removed')
        console.log(player.id)
        // deleteShoppingCart(player.id)
        // removeFromDb(player.id)
        removeFromDb(player.id)
            setDltCart(removedCart)

    }
}
}

    return (
        <div>
                                    <h1 className='shop-header'> Purchase Players For Your Best Eleven From {players.length}</h1>

        <div className='shop-container'>

            <div className='players-container'>

                {
                players.map(player => <PlayerCard 
                    player={player}
                    handleAddToCart ={handleAddToCart}
                    handleDltCart={handleDltCart}
                ></PlayerCard> )
                }
            </div>

            <div className='cart-container'>

<Cart cart ={cart}></Cart>

            </div>
        </div>
        </div>

    );
};

export default Shop;