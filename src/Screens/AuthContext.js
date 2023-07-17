import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

import AsyncStorage from '@react-native-async-storage/async-storage'

import axios from 'axios'
import { BASE_URL } from "./config";

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [userDetails, setUserDetails] = useState();


    const login = (username, password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}api/auth/login`, {
            "mobile": username,
            "password": password,
        }).then(async res => {
            let userInfo = { ...res.data.User };
            setUserInfo(userInfo);
            setUserToken(res.data.token);
            AsyncStorage.setItem('userinfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', res.data.token);
            await getUserDetails(userInfo?._id);
            setIsLoading(false);
        })
            .catch(e => {
                alert(`Wrong Credentails`);
                console.log(`Login error hello ${e}`);
                setIsLoading(false);
            })
    }

    // const register = (name, email, password, mobile, role) => {
    //     const data = {
    //         mobile,
    //         password,
    //         name,
    //         email,
    //         role,
    //     };
    //     setIsLoading(true);
    //     axios.post(`${BASE_URL}api/auth/register`, data)
    //         .then(res => {
    //             let userInfo = { ...res.data.payload };
    //             console.log(`userInfo---------->`, userInfo);
    //             console.log(`userInfo---------->`, userInfo.userDetails);
    //             setUserInfo(userInfo);
    //             setUserToken(res.data.token);
    //             AsyncStorage.setItem('userinfo', JSON.stringify(userInfo));
    //             AsyncStorage.setItem('userToken', res.data.token);
    //             // UserToken is Getting console log
    //             setIsLoading(false);
    //         })
    //         .catch(e => {
    //             alert(`Mobile already Registered Please Login `);
    //             console.log(`hello: ${e}`);
    //             setIsLoading(false);
    //         });
    // };


    const register = async (name, email, password, mobile, role) => {
        const data = {
            mobile,
            password,
            name,
            email,
            role,
        };
        setIsLoading(true);
        try {
            const res = await axios.post(`${BASE_URL}api/auth/register`, data);
            let userInfo = { ...res.data.payload };
            console.log(`userInfo---------->`, userInfo);
            console.log(`userInfo---------->`, userInfo.userDetails);
            AsyncStorage.setItem('userinfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', res.data.token);
            setUserInfo(userInfo);
            setUserToken(res.data.token);
            await getUserDetails(userInfo?._id);
            setIsLoading(false);
        } catch (e) {
            alert(`Mobile already Registered. Please Login.`);
            console.log(`hello: ${e}`);
            setIsLoading(false);
        }
    };


    const logout = async () => {
        console.log('logout');
        setIsLoading(true)
        setUserToken(null)
        setUserDetails(null);
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userinfo');
        await AsyncStorage.removeItem('userDetails');
        setIsLoading(false);
    }

    const isLogedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userinfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserToken(userToken);
                console.log(`token`, userToken);
                setUserInfo(userInfo);
                await getUserDetails(userInfo?._id);
            }
            setIsLoading(false);
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    }

    const addUserDetails = async (data) => {
        console.log(`data`, data.contactNo);
        setIsLoading(true);
        const headers = { 'Authorization': `Bearer ${userToken}` };
        try {
            const res = await axios.post(`${BASE_URL}api/user-details/add`, data, { headers });
            await getUserDetails(res._id);
            setIsLoading(false);
        } catch (e) {
            console.log(`Response: ${JSON.stringify(e.response)}`);
            setIsLoading(false);
        }
    }

    const getUserDetails = async (id) => {
        console.log(id);
        if (!id) {
            return;
        }
        const headers = { 'Authorization': userToken };
        setIsLoading(true);
        let response;
        try {
            response = await axios.get(`${BASE_URL}api/user-details/${id}`, { headers });
            const userDetails = { ...response.data.userDetails, mobile: response.data.mobile };
            console.log(`response from userdetails line:121 `, response.data.userDetails);
            console.log(`USERDETAILS.;l,;l.,l[]/;'.`, userDetails);
            setUserDetails(userDetails);
            console.log(`USERDETAILS`, userDetails)
            await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));
            setIsLoading(false);
        } catch (e) {
            console.log(`error from authcontext `, e);
        }
    }

    // const getUserDetails = async (id) => {
    //     console.log(id);
    //     if (!id) {
    //         return;
    //     }
    //     const headers = { 'Authorization': userToken };
    //     setIsLoading(true);
    //     try {
    //         const response = await axios.get(`${BASE_URL}api/user-details/${id}`, { headers });
    //         const UserDetails = { ...response.data.userDetails, mobile: response.data.mobile };
    //         console.log(`USERDETAILS:`, UserDetails);
    //         setUserDetails(UserDetails);
    //         await AsyncStorage.setItem('userDetails', JSON.stringify(UserDetails));
    //         setIsLoading(false);
    //     } catch (e) {
    //         console.log(`error from authcontext: `, e);
    //         setIsLoading(false);
    //     }
    // }


    useEffect(() => {
        isLogedIn();
    }, []);
    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo, register, userDetails, addUserDetails, getUserDetails, setUserDetails }}>
            {children}
        </AuthContext.Provider>
    )
}