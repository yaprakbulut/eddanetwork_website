import React from 'react';
import Title from '../Title';
import {ProductProvider, ProductConsumer} from '../Context/Context';

export default function Popular() {
    return (
<ProductConsumer>
    {value=>{
        return(
            <section className="blog">
             <div className="inside-container">
                 <Title title="Hizmetlerimiz" color="grey" />
    <div className="blog-center">
        {value.blogItems.map(item=>{
            return(
                <div className="single-blog" key={item.id}>
                   <img src={item.img} alt="img"/> 
                   <div className="posts">
            <p>{item.title}</p>
            <p>{item.words}</p>
                   </div> 
                </div>
            )
        })}
    </div>
             </div>
            </section>
        )
    }}
</ProductConsumer>
    )
}
