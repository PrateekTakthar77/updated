import axios from 'axios';
//TODO: MOVE IT INTO SOME CONSTANTS FILE
import { BASE_URL } from '../config';
import { cartInitialState } from './cart.reducer';

export const updateCart = async (productId, quantity, userToken) => {
    console.log('--------------', quantity);
    let cartDetails = {};
    try {
        const headers = { Authorization: `Bearer ${userToken}` };
        const response = await axios.post(
            `${BASE_URL}api/carts/items`,
            {
                productId,
                quantity,
            },
            { headers },
        );
        cartDetails = response.data ? response.data.cart : cartInitialState;
        console.log(cartDetails);
    } catch (e) {
        console.log(e);
        cartDetails = cartInitialState;
    }
    return cartDetails;
};
