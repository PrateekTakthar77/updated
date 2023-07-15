import { combineReducers } from 'redux'
import { reducer } from './reducer'
import { products } from '../Screens/products/product.reducer';

export default combineReducers({
    reducer,
    products
})