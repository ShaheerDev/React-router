import React from 'react';
import Iframe from 'react-iframe';

export default function Contact(){
    return(
        <div style={{paddingLeft: 14}}>
        <h1>Contact page</h1>
        <hr />
        <p><b>Phone number:</b> +92 1234567890</p>
        <p><b>Address:</b> Pakistan, Earth, Solar system, Milky way galaxy, the known universe</p>
        <br />
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143117.941545919!2d60.32337114882688!3d30.068124090484673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1646113537594!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
        </div>
    )
}