import React from 'react';
import ModalDetails from '../Modal/ModalDetails';
import './PlayerCard.css';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PlayerCard = (props) => {


    // console.log(props)
    const { img, name, price, ratings, category } = props.player;

    const handleAddToCart = props.handleAddToCart
    // console.log(handleAddToCart)

    const vsRating = [];
    let rating = <FontAwesomeIcon icon={faStar} />;

    for (let i = 0; i < ratings; i++) {
        if (ratings !== undefined) {
            vsRating.push(rating)
        }
    }


    return (
        <div className='player-card-container'>
            <img className="ms-3" src={img} alt="" />
            <div className='player-info ms-3'>
                <h4>Name: {name}</h4>
                <p>Price : ${price} </p>
                <p>Ratings : {vsRating.map(rating => rating)}</p>
                <p>Category : {category} </p>
            </div>
            <div className='btn-container ms-3'>
                <ModalDetails modal={props.player}></ModalDetails>
                <button className="buy-btn" onClick={() => handleAddToCart(props.player)} >Buy 
                    <FontAwesomeIcon className="icon" icon={faCartShopping} />
                </button>
                <button className="dlt-btn" onClick={() => handleAddToCart(props.player)} >Delete 
                </button>

            </div>

        </div>
    );
};

export default PlayerCard;