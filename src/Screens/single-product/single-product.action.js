import { ADD_TO_CART } from '../../redux/constants';
import { saveSingleProductService } from './single-product.service';

export const singleProductAction = async (data, dispatch) => {
    const cart = await saveSingleProductService(data);
    dispatch({
        type: ADD_TO_CART,
        data: cart,
    });
};
