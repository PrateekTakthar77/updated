import { getProducts } from './products.service';
import { ADD_PRODUCTS } from './products.constants';

export const getProductsActionCreator = async (dispatch) => {
    const products = await getProducts();
    dispatch({
        type: ADD_PRODUCTS,
        data: products,
    });
};
