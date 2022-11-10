import React from 'react';
import { useSelector,  } from 'react-redux';
import { getCartItems } from '../../redux/cartSlice';


const Cart = () => {
    const cartItems = useSelector(getCartItems);
console.log(cartItems)
    //const dispatch = useDispatch()
    return ( 
    <div >
        <h2>Mi bolsa</h2>
        <p><b>{cartItems.length}</b></p>
        <div>
       

        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(addItemToCart())}
        >
          +
        </button> */}
      </div>
  </div>

    )
}
export default Cart;