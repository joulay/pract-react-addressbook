import React from 'react';

import './contact.css';


//stateless
export default function Contact(props) {
    //three props: name, photo, address
    return (
        <div id={`contact-${props.index}`} class="contact">
            <image src={props.photo} alt={props.name}/>
            <h3 className="contact-name">{props.name}</h3>
            <div className="contact-address">
                {props.address}
            </div>
        </div>
    )
} 

