import React from 'react';
import Title from '../Title';

export default function ContactForm() {
    return (
      <section className="contact-form">
          <div className="inside-container">
              <Title title="İLETİŞiM" color="#FF0012" />
              <div className="contact-form-center">
            <form >
                <div className="form-inputs-texts">
                  <div className="inputs">
                      <p><label htmlFor="name">İSİM</label></p>
                      <input type="text" className="name" name="" id=""/>
                      
                      <p><label htmlFor="email">EMAIL</label></p>
                      <input type="email" className="email" name="" id=""/>
                </div> 

                <div className="form-texts">
                    <p>Daha fazla bilgi edinmek için lütfen iletişime geçiniz.</p>
                    <p>EddaNetwork</p>
                    <p>Pınarbaşı Mh. Hürriyet Cd. Ar-Ge 2 Binası No:3A/23, Konyaaltı, Antalya</p>
                    <p>+90 533 375 19 11</p>
                </div> 

                </div>
                <div className="form-area">
                    <p><label htmlFor="message">MESAJ</label></p>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <button type="button" className="btnForm">GÖNDER</button>
            </form>
              </div>
          </div>
      </section>
    )
}
