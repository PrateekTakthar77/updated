import axios from 'axios';
import { BASE_URL } from '../config';

import { showMessage, hideMessage } from 'react-native-flash-message';

export const checkout = async (userToken) => {
    console.log(`checkout-----------`, userToken);
    let checkout = {};
    try {
        const headers = { Authorization: `Bearer ${userToken}` };
        const response = await axios.post(`${BASE_URL}api/checkouts`, null, { headers });
        console.log(response.data.message);
        showMessage({
            message: 'Simple message',
            type: 'info',
        });
        checkout = response.data ? response.data.checkout : {};
    } catch (e) {
        console.log(`check out error `, e);
    }
    return checkout;
};
