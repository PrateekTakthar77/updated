import { FILLDETAILS } from './FormDetails.constant';
import { GET_DETAILS } from './FormDetails.constant';
import { updateUserDetails, fetchUserDetails } from './FormDetails.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getUserDetails } from './getDetails.service';

export const fillDetails = (userToken, userDetails) => {
    return async function (dispatch) {
        const details = await updateUserDetails(userToken, userDetails);
        getUserDetails(details._id, dispatch);
    };
};

export const getUserDetailsActionCreator = (id) => {
    return async function (dispatch) {
        await getUserDetails(id, dispatch);
    };
};

const getUserDetails = async (id, dispatch) => {
    const userDetailsData = await fetchUserDetails(id);
    await AsyncStorage.setItem('userDetails', JSON.stringify(userDetailsData));
    dispatch({
        type: FILLDETAILS,
        data: userDetailsData,
    });
};
