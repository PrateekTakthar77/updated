import { BASE_URL } from '../../app.constants';

export const getProductsService = async () => {
    console.log(item);
    let products = [];

    try {
        products = await axios.get(`${BASE_URL}api/products/`);
    } catch (e) {
        console.log(e);
    }

    return products;
};
