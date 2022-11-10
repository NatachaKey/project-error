import { useState } from "react";
import { dataJewelry } from "./data";
import Buttons from "./Buttons";
import Jewelry from "./Jewelry";
import Cart from "./Components/Cart/Cart";


function Home(){
const [jewelry, setJewelry]= useState(dataJewelry);

  const chosenJewelry = (searchTerm) =>{
  const newJewelry = dataJewelry.filter(element=>element.searchTerm === searchTerm);
    setJewelry(newJewelry); 
  }

  return( <div>
    <div className="cont">
      <h2 className="back">Envío gratuito para los pedidos superiores a 2000$</h2>
    </div>
  <Cart jewelry={jewelry}/>
  <Buttons filteredJewelry={chosenJewelry}/>
  <Jewelry jewelry={jewelry}/>

  
  </div>
  )
}

export default Home;