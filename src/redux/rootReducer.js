import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { products } from '../Screens/products/product.reducer';
import { singleProduct } from '../Screens/single-product/single-product.reducer';
import { cart } from '../Screens/cart/cart.reducer';
import { fillDetails } from '../../src/Screens/FormDetails/fillDetails/FormDetails.reducer';

export default combineReducers({
    reducer,
    products,
    product: singleProduct,
    cart,
    userDetailsData: fillDetails,
});
