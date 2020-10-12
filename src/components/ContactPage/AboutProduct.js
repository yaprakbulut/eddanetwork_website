import React from 'react';
import Title from '../Title';


export default function AboutProduct() {
    return (
        <div className="aboutContact">
          <div className="inside-container">
              <Title title="Bize Ulaşın" color="red" />
             <div className="aboutContact-center">

                 <div className="aboutContact-info">
                 <p><span><i className='fas fa-user'></i></span>Fırat KOCAOĞLU</p>

                    <p><span><i className='fas fa-phone-alt'></i></span>+90 533 375 19 11</p>

                    <p><span><i className='fas fa-envelope'></i></span>firat@gmail.com</p>

                    <p><span><i className='fas fa-user'></i></span>Pınarbaşı Mh. Hürriyet Cd. Ar-Ge 2 Binası No:3A/23 Konyaaltı/Antalya</p>
                 </div>

                 <div className="aboutContact-form">
                 <form >
                     <div className="inputs">
                         <label htmlFor="name">İsim</label><br/>
                         <input type="text"/>
                     </div>

                     <div className="inputs">
                         <label htmlFor="name">Mail</label><br/>
                         <input type="email"/>
                     </div>
                     <div className="textarea">
                         <label htmlFor="message">Mesaj</label>
                         <textarea name="" id="" cols="30" rows="5"></textarea>
                     </div>

                     <button type="button" className="btn">Gönder</button>


                 </form>
             </div>
                 
             </div>

           
          </div>
        </div>
    )
}
