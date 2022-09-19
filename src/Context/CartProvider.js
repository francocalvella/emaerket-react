import CartContext from "./CartContext";
import { useReducer } from "react";
import { cartReducer, initialState } from "../Reducers/CartReducer";
import { CART_TYPES } from "../Actions/CartActions";

export default function AuthProvider(props){
    const [state, dispatch] = useReducer(cartReducer, initialState)
    //TODO SESSION STORAGE
    function addToCart(id){
        dispatch({type: CART_TYPES.ADD_ONE, payload: id});
        console.log(state)
    }

    function removeOne(id){
        dispatch({type: CART_TYPES.REMOVE_ONE, payload: id})
    }

    function clear(){
        dispatch({type: CART_TYPES.CLEAR})
    }

    return (
    <CartContext.Provider
    value={{
        cart: state.cart,
        addToCart,
        clear,
        removeOne
    }}
    >
        {props.children}
    </CartContext.Provider>
    )
}