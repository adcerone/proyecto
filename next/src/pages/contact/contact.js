import React from 'react';
import Layout from '/public/components/layout';
import ContactForm from '../../../public/components/contactFormComponent';
import('./contact.css')

const Contact = () => {
  return (
    <Layout>
      <div id="contact">
        <div class="tittle">
          <p class="accent">--------------------------------------------</p>
          <h1>Contacto</h1>
          <p class="accent">--------------------------------------------</p>
        </div>

        <div class="contact">
          <div class="contactList">
            <div id='horario'>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe src="https://maps.google.com/maps?q=Concepci%C3%B3n%20Arenal%203910,%20B7600IPF%20Mar%20del%20Plata,%20Provincia%20de%20Buenos%20Aires&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" ></iframe>
                </div>
              </div>              
              <div>
                <h2>Horarios de atención</h2>
                <p>Martes a viernes: de 12 hs a 16 hs<br />Sábados y domingos: de 12 hs a 18 hs<br />Lunes: cerrado</p>
              </div>
            </div>

            <div>
              <p>Sábados y domingos de 13 hs a 15 hs contamos con delivery propio.</p>
              <p>Delivery toda la semana a través de PedidosYa.</p>
            </div>
            <div>
              <a href="#">*** WhatsApp ***</a>
            </div>
          </div>
          <div class="contactForm">
            <h2>Formulario de contacto</h2>
            <ContactForm />
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Contact;
