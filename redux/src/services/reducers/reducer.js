import { ADD_TO_CART } from '../constants'

const initialState = {
    cartData: []
}

export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer",action)
            return {
                ...state,
                cartData: action.payLoad
            }
        default: return state
    }
}