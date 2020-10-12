import React from 'react';
import Bounce from 'react-reveal';
import Title from '../Title';
import BackInterior from '../../images/decor2.jpg';
import BackInterior2 from '../../images/firat.jpeg';
import {ProductConsumer} from '../Context/Context';

export default function BestInteriors() {
    return (
        <ProductConsumer>
            {value=>{
return(
    <section className="interiors">
        <div className="inside-container">
           <Title title="best interiors" color="red" />   
                

                <div className="row">
                <div className="column">
                    <div className="card">
                    <img src="../../images/firat.jpeg" style={{width:"100%"}}></img>
                    <div className="container">
                        <h2>Jane Doe</h2>
                        <p className="title">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <img src="/w3images/team2.jpg" alt="Mike" style={{width:"100%"}}></img>
                    <div className="container">
                        <h2>Mike Ross</h2>
                        <p className="title">Art Director</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                
                <div className="column">
                    <div className="card">
                    <img src="/w3images/team3.jpg" alt="John" style={{width:"100%"}}></img>
                    <div className="container">
                        <h2>John Doe</h2>
                        <p className="title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                </div>
           
           
        </div>
    </section>
)
            }}
        </ProductConsumer>
    )
}
