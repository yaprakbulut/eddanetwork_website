import React from 'react';
import Title from '../Title';
import {ProductProvider, ProductConsumer} from '../Context/Context';

export default function Projects() {
    return (
<ProductConsumer>
    {value=>{
        return(
            <section className="blog">
             <div className="inside-container">
                 <Title title="projelerimiz" color="red" />
    <div className="blog-center">
        {value.blogItems.map(item=>{
            return(
                <div className="single-blog" key={item.id}>
                   <img src={item.img} alt="img"/> 
                   <div className="posts">
                        <p className="title">{item.title}</p>
                        <p className="words">{item.words}</p>
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
