import { ADD_TO_CART } from './cart.constants';

export const cartInitialState = {
    id: null,
    user: null,
    items: [],
    total: 0,
};

export const cart = (state = cartInitialState, action = {}) => {
    switch (action.type) {
        case ADD_TO_CART:
            return getTransformedCart(action.data);
        default:
            return state;
    }
};

const getTransformedCart = ({ cartDetails, products }) => {
    // console.log(cartDetails);
    const updatedCartDetails = { ...cartDetails };
    updatedCartDetails.cgst = updatedCartDetails.cgst || 0;
    updatedCartDetails.sgst = updatedCartDetails.sgst || 0;
    updatedCartDetails.discount = updatedCartDetails.discount || 0;
    updatedCartDetails.grandTotal = calculateGrandTotal(updatedCartDetails);
    updatedCartDetails.id = updatedCartDetails._id;

    updatedCartDetails.items = updatedCartDetails.items.map((item) => {
        const product = products.find((product) => product.id === item.product);
        if (product) {
            item.name = product.name;
            item.price = product.price;
            item.images = product.images;
        }

        return item;
    });

    return updatedCartDetails;
};

const calculateGrandTotal = (updatedCartDetails) => {
    return (
        updatedCartDetails.total +
        taxCalculation(
            updatedCartDetails.total,
            updatedCartDetails.cgst,
            updatedCartDetails.sgst,
        ) -
        updatedCartDetails.discount
    );
};

const taxCalculation = (total, cgst, sgst) => {
    // WILL BE REMOVED IN FUTURE
    if (cgst === 0 && sgst === 0) {
        return 0;
    }

    return total * (cgst / 100) * (sgst / 100);
};
