import React from "react";
import Bounce from "react-reveal";
import Title from "../Title";
import BackInterior from "../../images/decor2.jpg";
import BackInterior2 from "../../images/firat.jpeg";
import { ProductConsumer } from "../Context/Context";

export default function BestInteriors() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <section className="interiors">
            <div className="inside-container">
              <Title title="best interiors" color="red" />

              <div className="row">
                <div className="column">
                  <div className="card">
                    <img src={BackInterior2} style={{ width: "100%" }}></img>
                    <div className="container">
                      <h2 className="isim">Fırat KOCAOĞLU</h2>
                      <p className="title">CEO & Founder</p>
                      <p>
                        Text.
                      </p>
                      <p>firat@eddanetwork.com</p>
                      <p>
                        <button className="button">İletişim</button>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="card">
                    <img
                      src="/w3images/team2.jpg"
                      alt="Mike"
                      style={{ width: "100%" }}
                    ></img>
                    <div className="container">
                      <h2 className="isim">İbrahim ZAĞLI</h2>
                      <p className="title">CTO</p>
                      <p>
                        Text.
                      </p>
                      <p>zagli@eddanetwork.com</p>
                      <p>
                        <button className="button">İletişim</button>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="card">
                    <img
                      src="/w3images/team3.jpg"
                      alt="John"
                      style={{ width: "100%" }}
                    ></img>
                    <div className="container">
                      <h2 className="isim">Temel EKMEN</h2>
                      <p className="title">Projects Manager</p>
                      <p>
                        Text.
                      </p>
                      <p>temel.ekmen@eddanetwork.com</p>
                      <p>
                        <button className="button">İletişim</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
