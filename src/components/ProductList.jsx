import React from 'react';

export default function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Available Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '20px',
              margin: '10px',
              width: '200px',
              textAlign: 'center'
            }}
          >
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 15px',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
