import { createSlice } from '@reduxjs/toolkit'
//import { dataJewelry } from "../data";


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    
    cartItems: []
},
  reducers: {
    addItemToCart: (state, action) => {
        const timeId = new Date().getTime();
        

        // {dataJewelry.map((element=> 
        //   const {id, price}= element))};

        state.cartItems.push({
            id:timeId,
          // ne mogy propisat ostalnye parametry- quantity, price, ne ponimau gde ix brat
           
    } )
      
    },
  
  },
})

export const getCartItems = state =>state.cart.cartItems;
export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;