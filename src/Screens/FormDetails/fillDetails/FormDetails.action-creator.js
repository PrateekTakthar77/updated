import { FILLDETAILS } from './FormDetails.constant';
import { GET_DETAILS } from './FormDetails.constant';
import { updateUserDetails, fetchUserDetails } from './FormDetails.service';

export const fillDetails = (userToken, userDetails) => {
    return async function (dispatch) {
        const details = await updateUserDetails(userToken, userDetails);
        // console.log(`action creators././././././././/.//./`, userDetails);
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
    // console.log(`delelelel=--=-=-==-=-=-=-=-=-=-=-=-`, userDetailsData);
    // await AsyncStorage.setItem('userDetails', JSON.stringify(userDetailsData));
    dispatch({
        type: FILLDETAILS,
        data: userDetailsData,
    });
};
