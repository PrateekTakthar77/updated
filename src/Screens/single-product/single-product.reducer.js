import { GET_SINGLE_PRODUCT } from './single-product.constants';

export const singleProduct = (state = {}, action = {}) => {
    switch (action.type) {
        case GET_SINGLE_PRODUCT:
            return action.data;
        default:
            return state;
    }
};
