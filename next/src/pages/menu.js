import './menu.css';
import React, { useEffect, useState } from 'react';
import Layout from '../../public/components/layout';

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <Layout>
      <div>
        <h1>Menu</h1>
        <div className='menuDisplay'>
          {products.map((product) => (
            <div key={product._id} className="card">
              <div className="card-header">
                <h5 className="card-title">{product.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <img className="card-img" src={product.image} alt={product.name} />
                {product.isVegan && <p className="card-text">Vegan: Yes</p>}
                {product.isVeggie && <p className="card-text">Veggie: Yes</p>}
                {product.isTaccFree && <p className="card-text">Tacc Free: Yes</p>}
              </div>
            </div>
        ))}
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
