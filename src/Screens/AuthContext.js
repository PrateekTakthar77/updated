import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

import AsyncStorage from '@react-native-async-storage/async-storage'

import axios from 'axios'
import { BASE_URL } from "./config";

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [userDetails, setUserDetails] = useState(null);


    const login = (username, password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}api/auth/login`, {
            "mobile": username,
            "password": password,
        }).then(async res => {
            // console.log(res.data);
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token);
            AsyncStorage.setItem('userinfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.token);
            console.log("Login API espon", userInfo);
            await getUserDetails(userInfo?.User?._id);
            setIsLoading(false);
        })
            .catch(e => {
                alert(`Wrong Credentails`);
                console.log(`Login error hello ${e}`);
                setIsLoading(false);
            })
    }

    const register = (name, email, password, mobile, role) => {
        console.log('Name', name, 'Mobile', mobile, 'Email', email, 'Role', role, 'Password', password);
        const data = {
            mobile,
            password,
            name,
            email,
            role,
        };
        setIsLoading(true);
        axios.post(`${BASE_URL}api/auth/register`, data)
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                setUserToken(userInfo.token);
                AsyncStorage.setItem('userinfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', userInfo.token);
                console.log(res.status);
                setIsLoading(false);
            })
            .catch(e => {
                alert(`Mobile already Registered Please Login `);
                console.log(`hello: ${e}`);
                setIsLoading(false);
            });
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
                setUserInfo(userInfo);
                await getUserDetails(userInfo?.userId);
            }
            setIsLoading(false);
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    }

    const updateUserDetails = async (data) => {
        setIsLoading(true);
        const headers = { 'Authorization': `Bearer ${userToken}` };
        try {
            console.log(`data from authcontext`, data);
            console.log(`headers from authcontext`, headers);
            const res = await axios.post(`${BASE_URL}api/user-details/add`, data, { headers });
            const userDetails = res.data;
            console.log(`userDetails$$$$$`, userDetails)
            setUserDetails(userDetails.data);
            await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails.data));
            setIsLoading(false);
        } catch (e) {
            console.log(`hello from userdetails: ${e}`);
            console.log(`Response: ${JSON.stringify(e.response)}`);
            setIsLoading(false);
        }
    }

    const getUserDetails = async (id) => {
        console.log("id", id);
        if (!id) {
            return;
        }

        const headers = { 'Authorization': userToken };
        setIsLoading(true);

        let userDetails;
        try {
            userDetails = await axios.get(`${BASE_URL}api/user-details/${id}`, { headers });
        } catch (e) {
            console.log(`error from authcontext `, e);
        }

        setUserDetails(userDetails.data);
        await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails.data));
        setIsLoading(false);
    }

    useEffect(() => {
        isLogedIn();
    }, []);
    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo, register, userDetails, updateUserDetails, getUserDetails }}>
            {children}
        </AuthContext.Provider>
    )
}