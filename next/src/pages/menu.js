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
        <h1>Nuestra carta</h1>
        <div className='menuDisplay'>
          {products.map((product) => (
            <div key={product._id} className="card">
              <div className="card-body">
                <img className="card-img" src={"images/placeholderimg.png"} alt={product.name} />
                <p className="card-description">Description: {product.description}</p>
                <h5 className="card-tittle">{product.name}</h5>               
                <p className="card-price">Price: ${product.price}</p>
                {product.isVegan && <p className="card-optVV">Vegan: Yes</p>}
                {product.isVeggie && <p className="card-optV">Veggie: Yes</p>}
                {product.isTaccFree && <p className="card-optT">Tacc Free: Yes</p>}
                <button className='addProduct'>añadir</button>
              </div>
            </div>
        ))}
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
