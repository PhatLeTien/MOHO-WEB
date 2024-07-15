import React, { useState, useEffect } from 'react';
import '../CartComponent/CartStyle.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(existingCartItems);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(existingCartItems);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const incrementQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      if (!isNaN(parseFloat(item.price)) && !isNaN(item.quantity)) {
        total += parseFloat(item.price.replace(/\D/g, '')) * item.quantity;
      }
    });
    total = Math.floor(total);
    return total.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const handleCheckout = () => {
    // Add your checkout logic here
    console.log("Checkout clicked");
  };

  return (
    <div className="cart">
      <h2>Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty-message">Giỏ hàng của bạn đang trống</div>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <span>Price: ${item.price}</span>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Total: {calculateTotal()}</span>
            <button className="checkout-button" onClick={handleCheckout}>Thanh toán</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
