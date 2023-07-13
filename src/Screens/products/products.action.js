import { ADD_PRODUCTS } from '../../redux/constants';
import { getProductsService } from './products.service';

export const getProductAction = async (dispatch) => {
    const products = await getProductsService();
    setProductAction(products, dispatch);
};

export const setProductAction = (products, dispatch) => {
    dispatch({
        type: ADD_PRODUCTS,
        data: products,
    });
};
