import { BASE_URL } from '../../app.constants';
export const saveSingleProductService = async (item) => {
    // Check what is the structure of items
    console.log(item);

    try {
        const response = await axios.post(`${BASE_URL}api/carts/items`, {
            productId: item._id,
            quantity: 1,
        });

        return response?.cart || {};
    } catch (e) {
        console.log(e);
    }
};
