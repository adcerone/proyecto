import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import '../../src/app/globals.css';
import ProfileBtnController from './profileBtnController'
import ProfileBtnComponent from './modalDisplayComponent'
import Register from '../../src/pages/register';
import Login from '../../src/pages/login'


const Layout = ({ children }) => {

  console.log('Before calling ProfileBtnController');
  const profileController = ProfileBtnController();
  console.log('After calling ProfileBtnController');
  const { modalVisible, openModal, closeModal } = profileController;

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
        <div id='modalBtns'>
          <button id="cartBtn"><img src="../images/cart-shopping-solid.svg" alt="Cart"></img></button>
          <button id="profileBtn"><img src="../images/user-solid.svg" alt="Profile"></img></button>
        </div>
      </div>
      <div className='main'>
        {children}
        <div id="cartModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>

          </div>
        </div>
        <div id="profileModal" className={`modal ${modalVisible ? 'visible' : ''}`}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {<Login />}
            {<Register />}
          </div>
        </div>
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