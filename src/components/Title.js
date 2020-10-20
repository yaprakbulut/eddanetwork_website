import React from 'react';
import styled from 'styled-components';
import Roll from 'react-reveal/Roll';

export default function Title(props) {
    return (
       <TitleWrapper className="title" style={{color:props.color}}>
         <Roll>
         <h2 className="h2Title">{props.title}</h2>
          <div className="underline"></div>
         </Roll>
       </TitleWrapper>
    )
}



const TitleWrapper = styled.div`
 margin-bottom:10px;
 .h2Title{
     font-weight:400;
     text-transform:uppercase;
     font-family: "Lucida Calligraphy";   
 }

 .underline{
     width:40px;
     border:1px solid;
 }
 .h2, h2 {
    font-size: 1.7rem;
}


`
