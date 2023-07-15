import axios from 'axios';
//TODO: MOVE IT INTO SOME CONSTANTS FILE
import { BASE_URL } from '../config';

export const getProducts = async () => {
    let products = [];
    try {
        const response = await axios.get(`${BASE_URL}api/products/`);
        products = response.data
            ? response.data.map((product) => {
                  return {
                      id: product._id,
                      name: product.name,
                      description: product.description,
                      mrp: product.mrp,
                      price: product.price,
                      images: product.images,
                      category: product.category,
                      size: product.size,
                      color: product.color,
                      reviews: product.reviews,
                      weight: product.weight,
                  };
              })
            : [];
    } catch (e) {
        console.log(e);
    }
    return products;
};
