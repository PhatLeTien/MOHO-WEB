import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../CardDetailComponent/CardDetail.css';
import cardsData from '../CardComponent/CardData';

const CardDetail = () => {
  const { id } = useParams();
  const selectedCard = cardsData[id];
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    const productToAdd = {
      id: `card_${id}`, // Sử dụng index của mảng cardsData kết hợp với tiền tố
      name: selectedCard.title,
      price: selectedCard.price,
      quantity: quantity,
      image: selectedCard.image
    };

    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsArray = Array.isArray(existingCartItems) ? existingCartItems : [];

    let productExists = false;
    const updatedCartItems = cartItemsArray.map(item => {
      if (item.id === productToAdd.id) {
        item.quantity += quantity;
        productExists = true;
      }
      return item;
    });

    if (!productExists) {
      updatedCartItems.push(productToAdd);
    }

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="card-detail-container">
      <div className="card-detail">
        <img src={selectedCard.image} alt="Product" className="card-detail-image" />
        <div className="card-detail-content">
          <h2 className="card-detail-title">{selectedCard.title}</h2>
          <p className="card-detail-price">{selectedCard.price}</p>
          <p className="card-detail-discount">{selectedCard.discount}</p>
          <p className="card-detail-description">{selectedCard.description}</p>
          <div className="quantity-control">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button className="add-to-cart-button" onClick={addToCart}>THÊM VÀO GIỎ</button>
          <button className="add-to-cart-button-2">MUA NGAY</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
