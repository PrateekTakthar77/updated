import { updateCart } from './cart.service';
import { ADD_TO_CART } from './cart.constants';

export const addToCartActionCreator = (productId, userToken) => {
    return async function (dispatch, getState) {
        const { products } = getState();
        const cartDetails = await updateCart(productId, 1, userToken);
        dispatch({
            type: ADD_TO_CART,
            data: { cartDetails, products },
        });
    };
};

export const increaseCartItemQuantity = (productId, quantity, userToken) => {
    return async function (dispatch, getState) {
        const { products } = getState();
        const cartDetails = await updateCart(product, quantity + 1, userToken);
        dispatch({
            type: ADD_TO_CART,
            data: { cartDetails, products },
        });
    };
};
