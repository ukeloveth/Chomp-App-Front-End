import { ADD_TO_BASKET } from "../types";


const basketReducer = ( state = {}, action) => {
switch (action?.type) {
  case ADD_TO_BASKET:
    return {
      ...state, basket: [...state.basket, action.item]
    };
  default:
    return state;
}
}

export default basketReducer;