import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import '../../src/app/globals.css';
import ProfileBtnController from './profileBtnController'
import CartBtnController from './cartBtnController'
import ProfileBtnComponent from './modalDisplayComponent'
import Cart from '../../src/pages/cart/cart';
import Register from '../../src/pages/register/register';
import Login from '../../src/pages/login/login'


const Layout = ({ children }) => {
  const { modalVisible, openModal, closeModal } = ProfileBtnController();
  const { cartModalVisible, openCartModal, closeCartModal } = CartBtnController();

  return (
    <>
      <Head>
        <title>Trattoria Della Rosa</title>
      </Head>
      <div className="header">
        <div className="icon">
          <img src="/images/icon.png" title="logo" alt="logo" />
        </div>
        <div className="nav">
          <p className="title">Trattoria Della Rosa</p>
          <div>
            <ul>
              <li>
                <Link  href='../'>Inicio</Link>
              </li>
              <li>
                <Link href="/menu/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link href='../contact/contact'>Contacto</Link>
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
        <div id="cartModal" className={`modal ${cartModalVisible ? 'visible' : ''}`}>
          <div className="modal-content">
            <span className="close" onClick={closeCartModal}>&times;</span>
            <Cart />
          </div>
        </div>
        <div id="profileModal" className={`modal ${modalVisible ? 'visible' : ''}`}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ProfileBtnComponent />

          </div>
        </div>
      </div>
      <div className="footer">
        <div className="paymentBtn">
          <p>Medios de Pago</p>
          <div className="paymentBtnDiv">
            <button id='btnOne'><img src='../images/ctadni.jpg'></img></button>
            <h3>Cuenta DNI</h3>
            <button id='btnTwo'><img src='../images/mpago.png'></img></button>
            <h3>Mercadopago</h3>
          </div>
        </div>

        <div className="contact">
          <p>Contactanos</p>
          <div id='socialsBtn'>
            <button><img src='../images/whatsapp.svg'></img></button>
            <button><img src='../images/instagram.svg'></img></button>
            <button><img src='../images/facebook.svg'></img></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;