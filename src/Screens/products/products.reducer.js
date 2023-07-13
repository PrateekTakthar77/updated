import { ADD_PRODUCTS } from '../../redux/constants';

export const products = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return action.data;
        default:
            break;
    }
};
