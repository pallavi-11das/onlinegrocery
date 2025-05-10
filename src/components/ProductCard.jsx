import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <img src={product.imageUrl || 'https://via.placeholder.com/150'} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
      <h3><Link to={`/products/${product._id}`}>{product.name}</Link></h3>
      <p>${product.price}</p>
      <button onClick={() => console.log('Add to cart clicked for', product.name)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;