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
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.8248652250486!2d30.653164315574756!3d36.89453777008269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391cd6e38486d%3A0xfbd4e14587332eeb!2sAkdeniz%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1570793874135!5m2!1str!2str"
              paddingTop="10px"
              width="450px"
              height="300px"
              id="myId"
              className="myClassname"
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
