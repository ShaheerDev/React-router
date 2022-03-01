import React from 'react';
import {Link,} from "react-router-dom";
import carImg from '../imgs/car.jpg'

export default function Home(){
    return(
        <div style={{paddingLeft: 14}}>
        <h1>Home page</h1>
        <hr />
        <p style={{fontStyle: 'italic'}}><b>We deal in imported new cars</b> <button class="btn btn-light"><Link className="nav-link" to="/about">About us</Link></button><button class="btn btn-light"><Link className="nav-link" to="/contact">Contact us</Link></button></p>
        <br />
        <img src={carImg} width={500} height={200}/>
        </div>
            )
}