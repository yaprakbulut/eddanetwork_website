import React from "react";
import Title from "../Title";
import Iframe from "react-iframe";
import emailjs from 'emailjs-com';

export default function aboutContact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('edda', 'template_apcqg8r', e.target, 'user_yMWJZ8ptTHFbUXAnll3di')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="aboutContact">
      <div className="inside-container">
        <Title title="bize ulaşın" color="#FF0012" />
        <div className="aboutContact-center">
          <div className="aboutContact-info">
            <p>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              info@eddanetwork.com
            </p>

            <p>
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              +90 533 375 19 11
            </p>

            <div className="map_div">
              <p style={{ color: "#FF0012" }}>OFİSLERİMİZ:</p>
              <div className="adres_div">
                <div className="adres">
                  <p style={{ color: "rgb(87, 84, 84)" }}>Antalya</p>
                  <p className="adres_text">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    Pınarbaşı Mh. Hürriyet Cd. Ar-Ge 2 Binası No:3A/23
                    Konyaaltı/Antalya
                  </p>
                </div>

                <div className="adres">
                  <p style={{ color: "rgb(87, 84, 84)" }}>İstanbul</p>
                  <p>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    Eski Havaalanı Cad Erguvan sok 3/6 Yeşilköy/İstanbul
                  </p>
                </div>
              </div>
            </div>

            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6381.532646316366!2d30.640719224242588!3d36.89593809987882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3911e201857fd%3A0xd2a73886d2140f56!2sEddaNetwork!5e0!3m2!1str!2str!4v1602492749001!5m2!1str!2str"
              width="450px"
              height="200px"
              id="myId"
              className="map"
              display="initial"
              position="relative"
              styles={{ marginRight: "10rem" }}
            />
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.8529798193767!2d28.8285891151549!3d40.96279947930547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa31e7e2de2bd%3A0x24f2293bfbf51792!2zWWXFn2lsa8O2eSwgRXJndXZhbiBTay4gTm86MywgMzQxNDkgQmFrxLFya8O2eS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1602498261688!5m2!1str!2str"
              width="450px"
              height="200px"
              id="myId"
              className="map_right"
              display="initial"
              position="relative"
            ></Iframe>
          </div>

          <div className="aboutContact-form">
            <form onSubmit={sendEmail}>
              <div className="inputs">
                <label htmlFor="name">İsim</label>
                <br />
                <input type="text" name="name" />
              </div>

              <div className="inputs">
                <label htmlFor="name">Mail</label>
                <br />
                <input type="email" name="email" />
              </div>
              <div className="textarea">
                <label htmlFor="message">Mesaj</label>
                <textarea name="message" id="" cols="30" rows="5"></textarea>
              </div>

              <input className="submit" type="submit" value="Gönder">
              </input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
