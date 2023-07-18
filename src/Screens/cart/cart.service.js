import axios from 'axios';
//TODO: MOVE IT INTO SOME CONSTANTS FILE
import { BASE_URL } from '../config';
import { cartInitialState } from './cart.reducer';

export const updateCart = async (productId, quantity, userToken) => {
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
        console.log(`caartDetails from try`, cartDetails);
        // console.log(e.message);
    } catch (e) {
        console.log(e);
        cartDetails = cartInitialState;
    }
    return cartDetails;
};
