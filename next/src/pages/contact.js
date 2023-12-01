import React from 'react';
import Layout from '../../public/components/layout';

const Contact = () => {
  return (
    <Layout>
      <div id="contact">
        <div class="title">
          <p class="accent">--------------------------------------------</p>
          <h1>Contacto</h1>
          <p class="accent">--------------------------------------------</p>
        </div>

        <div class="contact">
          <div class="contactList">
            <h2>Horarios de atención</h2>
            <div>
              <p>Martes a viernes: de 12 hs a 16 hs</p>
              <p>Sábados y domingos: de 12 hs a 18 hs</p>
              <p>Lunes: cerrado</p>
            </div>
            <div>
              <p>Sábados y domingos de 13 hs a 15 hs contamos con delivery propio.</p>
              <p>Delivery toda la semana a través de PedidosYa.</p>
            </div>
            <div>
              <a href="#">*** Dirección y Maps ***</a>
              <a href="#">*** WhatsApp ***</a>
            </div>
          </div>

          <div class="contactForm">
            <h2>Formulario de contacto</h2>
            
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Contact;
