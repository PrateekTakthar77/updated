import { ADD_PRODUCTS } from './products.constants';

export const products = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return action.data;
        default:
            return state;
    }
};
