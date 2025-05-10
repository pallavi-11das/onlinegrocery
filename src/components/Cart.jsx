import React from 'react';

export default function Cart({ cart, removeFromCart, total }) {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              {item.name} - ${item.price.toFixed(2)}
              <button
                onClick={() => removeFromCart(index)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: '#ff4d4f',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <h4>Total: ${total.toFixed(2)}</h4>
      <button
        disabled={cart.length === 0}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
        }}
        onClick={() => alert('Thank you for your purchase!')}
      >
        Buy
      </button>
    </div>
  );
}
