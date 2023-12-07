import React from 'react';
import Layout from '../../public/components/layout';
import'./index.css'

const HomePage = () => {
  return (
    <Layout>
      <div>
        <h1 id='homeTittle'>Trattoria della Rosa</h1>
        <h2 id='homeSubtittle'>Amor en cada pasta,<br/>tradicion en cada receta.</h2>
      </div>
    </Layout>
  );
};

export default HomePage;
