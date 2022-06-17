import { CLEAR_CURRENT_USER, ADD_TO_BASKET, SET_CURRENT_USER } from "../types";

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    }

};
export const clearCurrentUser = () => {
    return {
        type: CLEAR_CURRENT_USER
    }

}
export const addToBasket = (basket) => {
    return {
      type: ADD_TO_BASKET,
      payload: basket,
    };
}