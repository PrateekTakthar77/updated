import axios from 'axios';
import { BASE_URL } from '../../config';

export const updateUserDetails = async (userToken, userDetails) => {
    let formDetails = {};
    const headers = { Authorization: `Bearer ${userToken}` };
    try {
        const response = await axios.post(`${BASE_URL}api/user-details/add`, userDetails, {
            headers,
        });
        formDetails = response.data;
        console.log(`;;;;;;;;;;`, formDetails);
    } catch (e) {
        console.log(`error from Redux: ${e}`);
        console.log(`Response: ${JSON.stringify(e.response)}`);
    }
    return formDetails;
};

export const fetchUserDetails = async (id) => {
    console.log('id', id);
    if (!id) {
        return;
    }
    const headers = { Authorization: userToken };
    // setIsLoading(true);
    let userDetails = {};
    try {
        userDetails = await axios.get(`${BASE_URL}api/user-details/${id}`, { headers });
    } catch (e) {
        console.log(e);
    }
    // await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails.data));
    console.log(`userdetails[..............]`, userDetails);
    // setIsLoading(false);
    return userDetails;
};
