import { CART_TYPES } from "../Actions/CartActions";

export const initialState={
    cart: []
}

export function cartReducer(state, action){
    switch(action.type){
        case CART_TYPES.ADD_ONE: if(!state.cart.includes(action.payload)) {
            //TODO HANDLE SESSION STORAGE
            return {...state, cart: [...state.cart, action.payload]}    
        }
        case CART_TYPES.REMOVE_ONE:{
            return {...state, cart: state.cart.filter(e=>e!==action.payload)}
        }
        case CART_TYPES.CLEAR:{
            return initialState
        }
        default: return state; 
    }
}