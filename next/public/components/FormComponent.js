import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
    isVegan: false,
    isVeggie: false,
    isTaccFree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(('http://localhost:3001/products'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br />

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        <br />

        <label htmlFor="price">Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        <br />

        <label htmlFor="image">Image URL:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
        <br />

        <label htmlFor="isVegan">Is Vegan:</label>
        <input type="checkbox" name="isVegan" checked={formData.isVegan} onChange={handleChange} />
        <br />

        <label htmlFor="isVeggie">Is Veggie:</label>
        <input type="checkbox" name="isVeggie" checked={formData.isVeggie} onChange={handleChange} />
        <br />

        <label htmlFor="isTaccFree">Is Tacc Free:</label>
        <input type="checkbox" name="isTaccFree" checked={formData.isTaccFree} onChange={handleChange} />
        <br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default FormComponent;
