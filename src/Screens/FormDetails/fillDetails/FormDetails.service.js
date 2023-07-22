import axios from 'axios';
import { BASE_URL } from '../../config';
// import React, { useContext, useRef, useState, useEffect } from 'react';
// import { AuthContext } from '../../AuthContext';
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

// id not found is the error
export const fetchUserDetails = async (id, userToken) => {
    if (!id) {
        throw new Error(`id not found`);
    }
    const headers = { Authorization: userToken };
    let userDetails = {};
    try {
        userDetails = await axios.get(`${BASE_URL}api/user-details/${id}`, { headers });
        console.log(`HTTPS request`, userDetails);
    } catch (e) {
        console.log(e);
    }
    console.log(`userdetails[..............]`, userDetails);
    return userDetails;
};
