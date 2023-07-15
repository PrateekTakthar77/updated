import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from "react-native";
import { Drawer } from 'react-native-drawer-layout';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from '../Screens/Splash';
import GetStarted from '../Screens/GetStarted';
import LogInSignUp from '../Screens/LogInSignUp';
import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import FormDetails from '../Screens/FormDetails';
import OTP from '../Screens/OTP';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Cart from '../Screens/Cart';
import SingleProduct from '../Screens/SingleProduct';
import Product from '../Screens/products/Product';
import WastageChart from '../Screens/WastageChart';
import Thankyou from '../Screens/Thankyou';
import Tabs from './Tabs';
import AboutUs from '../Screens/DrawerScreens/AboutUs';
import ManageOrder from '../Screens/DrawerScreens/ManageOrder';
import OurProduct from '../Screens/DrawerScreens/OurProduct';
import PrivacyPolicy from '../Screens/DrawerScreens/PrivacyPolicy';
import TnC from '../Screens/DrawerScreens/TnC';
import ServiceAvailable from '../Screens/DrawerScreens/ServiceAvailable';
import ViewProfile from '../Screens/ViewProfile';
// import TaxInvoice from '../Screens/TaxInvoice';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);


    useEffect(() => {
        AsyncStorage.getItem("userToken").then((value) => {
            if (value) {
                setShowSplashScreen(false);
            }
        });
    }, []);


    return (
        <Stack.Navigator options={{ headerShown: false }}>
            <>
                {showSplashScreen ? (
                    <>
                        <Stack.Screen
                            name="splash"
                            component={Splash}
                            options={{ headerShown: false, title: 'My home' }} />

                        <Stack.Screen
                            name="getstarted"
                            component={GetStarted}
                            options={{ headerShown: false, title: 'My home' }} />

                        <Stack.Screen
                            name="loginsignup"
                            component={LogInSignUp}
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="login"
                            component={LogIn}

                            options={{
                                headerShown: false,
                                title: '',
                                headerStyle: { backgroundColor: 'white' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="signup"
                            component={SignUp}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }}
                        />
                    </>
                ) : null
                }


                {showSplashScreen == false ? (
                    <>
                        <Stack.Screen
                            name="formdetails"
                            component={FormDetails}
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="tabs"
                            component={Tabs}
                            options={{ headerShown: false }} />


                        {/* <Stack.Screen
                            name="welcomeScreen"
                            component={WelcomeScreen}
                            options={{ headerShown: false }} />  */}


                        {/* <Stack.Screen
                            name="taxinvoice"
                            component={TaxInvoice}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />  */}


                        {/* 
                        <Stack.Screen
                            name="drawerBeta"
                            component={Drawer}
                            options={{ headerShown: false }} /> */}

                        <Stack.Screen
                            name="otp"
                            component={OTP}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }}
                        />

                        <Stack.Screen
                            name="cart"
                            component={Cart}
                            options={{
                                title: 'My Cart',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="singleproduct"
                            component={SingleProduct}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="product"
                            component={Product}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        {/* ---- */}

                        {/* wastagechart */}
                        <Stack.Screen
                            name="wastage"
                            component={WastageChart}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        {/* thanyou */}
                        <Stack.Screen
                            name="thankyou"
                            component={Thankyou}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="aboutus"
                            component={AboutUs}
                            options={{
                                title: '',
                                headerShown: true,
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="manageorder"
                            component={ManageOrder}
                            options={{
                                title: '',
                                headerShown: true,
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="ourproduct"
                            component={OurProduct}
                            options={{
                                title: '',
                                headerShown: true,
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="privacypolicy"
                            component={PrivacyPolicy}
                            options={{
                                title: '',
                                headerShown: true,
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="tnc"
                            component={TnC}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="wastagechart"
                            component={WastageChart}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="welcomescreen"
                            component={WelcomeScreen}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="ServiceAvailable"
                            component={ServiceAvailable}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="viewprofile"
                            component={ViewProfile}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                    </>
                ) : null
                }
            </>




        </Stack.Navigator>
    )
}

export default Navigation;




const styles = StyleSheet.create({
    imageSize: {
        width: 25,
        height: 25,
        resizeMode: "cover",

    },
});





// screenOptions = {{ headerShown: false }}