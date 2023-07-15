import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { products } from '../Screens/products/product.reducer';
import { singleProduct } from '../Screens/single-product/single-product.reducer';

export default combineReducers({
    reducer,
    products,
    product: singleProduct,
});
