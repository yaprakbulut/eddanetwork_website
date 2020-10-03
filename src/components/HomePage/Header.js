import React from "react";
import Bounce from "react-reveal/Bounce";
import styled from "styled-components";
import Image from "../../images/image1.png";
import SwiftSlider from "react-swift-slider";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export default function Header() {
  return (
    <div className="inside-container">
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={500}
              src={Image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={500}
              src="https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={500}
              src="https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

//delete background image
const HeroWrapper = styled.header`
  min-height: 60vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    )
    center/cover no-repeat;
  display: flex;
  align-items: center;
  margin-top: -90px;
  width: 100%;
  overflow: hidden;
  justify-content: center;

  .heroTexts {
    min-height: inherit;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .heroTexts h1 {
    font-size: 18px;
    text-transform: uppercase;
    color: lightgray;
    background: rgba(58, 65, 71, 0.8);
    margin: 5px;
    padding: 5px;
    font-weight: 400;
  }

  @media screen and (min-width: 880px) {
    min-height: 100vh;
    max-width: 100%;

    .heroTexts h1 {
      font-size: 30px;
    }
  }
`;
