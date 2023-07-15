import { getSingleProduct } from './single-product.service';
import { GET_SINGLE_PRODUCT } from './single-product.constants';

export const getSingleProductActionCreator = (productId) => {
    return async function (dispatch) {
        const product = await getSingleProduct(productId);
        dispatch({
            type: GET_SINGLE_PRODUCT,
            data: product,
        });
    };
};
