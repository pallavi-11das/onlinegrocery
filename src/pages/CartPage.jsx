import React, { useState } from 'react';
import Cart from '../components/Cart';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="page">
      <h2>Shopping Cart</h2>
      <Cart cart={cart} removeFromCart={removeFromCart} total={total} />
    </div>
  );
}
