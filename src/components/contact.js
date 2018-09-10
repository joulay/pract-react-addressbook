import React from 'react';

import './contact.css';


//stateless
export default function Contact(props) {
    //three props: name, photo, address
    return (
        <div id={`contact-${props.index}`} className="contact">
            <img className="contact-photo" src={props.photo} alt={`${props.name}${props.name.slice(-1) === 's' ? "'" : "'s"} avatar`}  />
            <h2 className="contact-name">
                {props.name}
            </h2>
            <div className="contact-address">
                {props.address}
            </div>
        </div>
    );
} 

