import React from "react";
import Title from "../Title";
import { ProductConsumer } from "../Context/Context";
import Roll from "react-reveal/Roll";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

export default function Services() {
  return (
    <ProductConsumer>
      {(value) => {
        const { services } = value;
        return (
          <section className="services">
            <div className="inside-container">
              <Title title="Hizmetlerimiz" color="#df080e" />
              <div className="services-center">
                {services.map((service) => {
                  return (
                    <CardDeck>
                      <Card
                        style={{
                          width: "15rem",
                          borderWidth: "0.3rem",
                          borderRadius: "2rem",
                          marginLeft: "2px",
                          borderColor: "#df080e",
                        }}
                        text="dark"
                        className="text-center p-3"
                      >
                        <Card.Body style={{ padding: "0.5rem" }}>
                          <Card.Text>
                            <Roll>
                              <div className="single-service" key={service.id}>
                                <i className={service.icon}></i>
                                <div className="texts">
                                  <h2>{service.column}</h2>
                                  <p>{service.text}</p>
                                </div>
                              </div>
                            </Roll>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardDeck>
                  );
                })}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
