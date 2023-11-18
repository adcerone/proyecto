import { ReactNode } from 'react';
import Head from 'next/head';
import '../../src/app/globals.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <div className="icon">
          <img src="/images/icon.png" title="logo" alt="logo" />
        </div>
        <div className="nav">
          <p className="title">Trattoria Della Rosa</p>
          <div>
            <ul>
              <li>
                <a href='./'>Inicio</a>
              </li>
              <li>
                <a href='./menu'>Menu</a>
              </li>
              <li>
                <a href='./contact'>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search.." name="searchx" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>

      </div>
      <div className='main'>
        {children}
      </div>
      <div className="footer">
        <div className="nav">
          <p>Navegación</p>
          <ul>
            <li>
              <a href='/'>Inicio</a>
            </li>
            <li>
              <a href='/menu'>Menu</a>
            </li>
            <li>
              <a href='/contact'>Contacto</a>
            </li>
          </ul>
        </div>

        <div className="paymentBtn">
          <p>Medios de Pago</p>
          <div>
            <button className="DNIBtn">DNI</button>
            <button className="MLBtn">MercadoLibre</button>
          </div>
        </div>

        <div className="contact">
          <p>Contactanos</p>
          <ul>
            <li>
              <i className="fa fa-phone"></i>
              <p>223-***-***</p>
            </li>
            <li>
              <i className="fa fa-instagram"></i>
              <p>**instagram**</p>
            </li>
            <li>
              <i className="fa fa-map-marker"></i>
              <p>**Dirección y Maps**</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Layout;