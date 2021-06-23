import React from 'react';
import '../css/card.css';

function Card(props) {
    return(
        <div className='scard' >
        
   <div className='image'>


<img src={props.src} alt='pic of' />
   </div>
<div className='description'>
<h2>{props.title}</h2>
<p>{props.description}</p>
<p><a href='/'>More...</a></p>
</div>
        </div>
    )
}

export default Card;