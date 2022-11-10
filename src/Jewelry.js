import React from 'react';
import { useState } from "react";
import {  useDispatch } from 'react-redux';
import {  addItemToCart } from './redux/cartSlice';

function Jewelry({jewelry}){
    
    const dispatch = useDispatch()

    
const [showText,setShowText] = useState(false);
const showTextClick= (element)=>{
    element.showMore=!element.showMore 
    setShowText(!showText)
}

    return(
    <div className="products">
    {jewelry.map((element=> 
     {const {id, name, price, image,  description, showMore}= element;

        return(<div className="productCard" key={id}>  
        
            <img className="bigger" src={image} alt="foto" width="400px" height="400px"/>
            <h3>{name}</h3>           
            <h4>€ {price}</h4>
            <p> {showMore ? description : description.substring(0, 40)} </p>
            <button className="seeMore" onClick={()=>showTextClick(element)}>{ showMore ? "Ver menos" : "Ver más"}</button>
            <div>
              
            <button className="cta" onClick={() => dispatch(addItemToCart())} >Add to cart </button>
            </div>
        
    </div>

    )
    }
))}
   </div>  
    )
}

export default Jewelry;