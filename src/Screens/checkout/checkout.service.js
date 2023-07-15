// import axios from 'axios';
// import { BASE_URL } from '../config';

// export const checkout = async (userToken) => {
//     console.log(`checkout-----------`, userToken);
//     let checkout = {};
//     try {
//         const headers = { Authorization: `Bearer ${userToken}` };
//         const response = await axios.post(`${BASE_URL}api/checkouts`, null, { headers });
//         console.log(response.data);
//         checkout = response.data ? response.data.checkout : {};
//     } catch (e) {
//         console.log(e);
//     }
//     return checkout;
// };
