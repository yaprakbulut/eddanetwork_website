import React from "react";
import Title from "../Title";
import Iframe from "react-iframe";

export default function AboutProduct() {
  return (
    <div className="aboutContact">
      <div className="inside-container">
        <Title title="Bize Ulaşın" color="red" />
        <div className="aboutContact-center">
          <div className="aboutContact-info">
            <p>
              <span>
                <i className="fas fa-user"></i>
              </span>
              Fırat KOCAOĞLU
            </p>

            <p>
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              +90 533 375 19 11
            </p>

            <p>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              firat@gmail.com
            </p>

            <p>
              <span>
                <i className="fas fa-user"></i>
              </span>
              Pınarbaşı Mh. Hürriyet Cd. Ar-Ge 2 Binası No:3A/23
              Konyaaltı/Antalya
            </p>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6381.532646316366!2d30.640719224242588!3d36.89593809987882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3911e201857fd%3A0xd2a73886d2140f56!2sEddaNetwork!5e0!3m2!1str!2str!4v1602492749001!5m2!1str!2str"
                width="450px"
                height="300px"
                id="myId"
                className="map"
                display="initial"
                position="relative"
              />
          </div>

          <div className="aboutContact-form">
            <form>
              <div className="inputs">
                <label htmlFor="name">İsim</label>
                <br />
                <input type="text" />
              </div>

              <div className="inputs">
                <label htmlFor="name">Mail</label>
                <br />
                <input type="email" />
              </div>
              <div className="textarea">
                <label htmlFor="message">Mesaj</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
              </div>

              <button type="button" className="btn">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
