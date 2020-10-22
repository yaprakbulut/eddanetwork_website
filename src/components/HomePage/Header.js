import React from "react";
import Bounce from "react-reveal/Bounce";
import styled from "styled-components";
import Image from "../../images/Untitled-2.png";
import Image2 from "../../images/Untitled-3.png";
import Image3 from "../../images/Untitled-4.png";
import SwiftSlider from "react-swift-slider";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export default function Header() {
  return (
    <div className="inside-container">
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Image} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image3}
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
    background: rgba(255, 0, 18, 0.8);
    margin: 5px;
    padding: 5px;
    font-weight: 400;
  }

  @media screen and (min-width: 880px) {
    min-height: 100vh;

    .heroTexts h1 {
      font-size: 30px;
    }
  }
`;
