import React from 'react';
import Title from '../Title';
import Image from "../../images/bora.jpeg";

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
                    <img src={Image} width="500" height="300" />
                   </div>
               </div>
           </div>
        </div>
    )
}
