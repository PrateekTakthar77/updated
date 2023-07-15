import axios from 'axios';
//TODO: MOVE IT INTO SOME CONSTANTS FILE
import { BASE_URL } from '../config';

export const getSingleProduct = async (productId) => {
    let product = [];
    try {
        const response = await axios.get(`${BASE_URL}api/products/${productId}`);
        product = response.data
            ? {
                  id: response.data._id,
                  name: response.data.name,
                  description: response.data.description,
                  mrp: response.data.mrp,
                  price: response.data.price,
                  images: response.data.images,
                  category: response.data.category,
                  size: response.data.size,
                  color: response.data.color,
                  reviews: response.data.reviews,
                  weight: response.data.weight,
              }
            : {};
    } catch (e) {
        console.log(e);
    }
    return product;
};
