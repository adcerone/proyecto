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

  const addToCart = async (productId) => {
    const token = localStorage.getItem('token');
    
    try {
      
      if (!token) {
        console.error('Authorization token not found');
        return;
      }
  
      const response = await fetch('http://localhost:3001/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: productId,
          quantity: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Item added to the cart:', data);
    } catch (error) {
      console.error('Error adding item to the cart:', error.message);
    }
  };

  return (
    <Layout>
      <div>
        <div id='menuHeader'>
          <h1>Nuestra carta</h1>
          <button>
            <img src='/images/magnifying-glass-solid.svg' alt="Magnifying Glass"></img>
          </button>
        </div>  
        <div/>
        <div className='menuDisplay'>
          {products.map((product) => (
            <div key={product._id} className="card">
              <div className="card-body">
                <img className="card-img" src={`images/platos/${product.name}.jpeg`} alt={product.name} />
                <p className="card-description">Description: {product.description}</p>
                <h5 className="card-tittle">{product.name}</h5>
                <p className="card-price">${product.price}</p>
                {product.isVegan && <p className="card-optVV">Vegan: Yes</p>}
                {product.isVeggie && <p className="card-optV">Veggie: Yes</p>}
                {product.isTaccFree && <p className="card-optT">Tacc Free: Yes</p>}
                <button className='addProduct' onClick={() => addToCart(product._id)}>añadir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
