import React from "react";
import Bounce from "react-reveal/Bounce";
import styled from "styled-components";
<<<<<<< HEAD
import Image from "../../images/image1.png";
import SwiftSlider from "react-swift-slider";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

=======
import SwiftSlider from "react-swift-slider";
//import image1 from './images/image1.png';

const data = [
  {
    id: "1",
    src: "https://user-images.githubusercontent.com/36292743/94988095-a37dfc80-051f-11eb-8a3f-f7196c08b5d1.png",
  },
  {
    id: "2",
    src:
      "https://user-images.githubusercontent.com/36292743/94988095-a37dfc80-051f-11eb-8a3f-f7196c08b5d1.png",
  },
  {
    id: "3",
    src:
      "https://user-images.githubusercontent.com/36292743/94988095-a37dfc80-051f-11eb-8a3f-f7196c08b5d1.png",
  },
  {
    id: "4",
    src:
      "https://user-images.githubusercontent.com/36292743/94988095-a37dfc80-051f-11eb-8a3f-f7196c08b5d1.png",
  },
  {
    id: "5",
    src:
      "https://user-images.githubusercontent.com/36292743/94988095-a37dfc80-051f-11eb-8a3f-f7196c08b5d1.png",
  },
];
>>>>>>> acf901792296d4b7a0b75bc9b989cfa7d0d18d4d
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
              src="https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
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
