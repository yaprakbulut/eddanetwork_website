import React from 'react';
import Title from '../Title';
import Image from "../../images/bora.jpeg";
import Image2 from "../../images/bora2.png";
import Image3 from "../../images/bora3.png";
import Carousel from "react-bootstrap/Carousel";

export default function JustDefault() {
    return (
        <div className="just-default">
           <div className="inside-container">
               <Title title="BORA Uzaktan Eğitim" color="#FF0012" />

               <div className="just-default-center">
                   <div className="just-texts">
                        <p>Bora Uzaktan Eğitim Sitesi, uzaktan eğitimin gerçkleştiği bir sitedir. </p>
                        <a className="Button" href="https://bora.eddanetwork.com/">
                        Detaylı Bilgi İçin Tıklayınız.
                        </a>
                       
                   </div>
                   <div className="just-video">
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
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src= {Image3}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            </Carousel>
                        </div>
                        </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
