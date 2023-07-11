import React, { useEffect, useState, useContext } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Pressable, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../Screens/Splash';
import GetStarted from '../Screens/GetStarted';
import LogInSignUp from '../Screens/LogInSignUp';
import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import FormDetails from '../Screens/FormDetails';
// import TaxInvoice from '../Screens/TaxInvoice';
import OTP from '../Screens/OTP';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Cart from '../Screens/Cart';
import SingleProduct from '../Screens/SingleProduct';
import Product from '../Screens/Product';
import { AuthContext } from "../Screens/AuthContext";
import WastageChart from '../Screens/WastageChart';
import Thankyou from '../Screens/Thankyou';
import Drawer from "../navigation/Drawer";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    // const navigation = useNavigation(),
    const navigation = useNavigation();

    useEffect(() => {
        AsyncStorage.getItem("userToken").then((value) => {
            if (value) {
                setShowSplashScreen(false);
            }
        });
    }, []);


    return (
        // <NavigationContainer >
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
                            name="welcomeScreen"
                            component={WelcomeScreen}
                            options={{ headerShown: false }} />

                        {/* <Stack.Screen
                            name="taxinvoice"
                            component={TaxInvoice}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} /> */}

                        <Stack.Screen
                            name="drawerBeta"
                            component={Drawer}
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="otp"
                            component={OTP}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="cart"
                            component={Cart}
                            options={{
                                title: '',
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
                                headerStyle: { backgroundColor: 'white' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        {/* thanyou */}
                        <Stack.Screen
                            name="thankyou"
                            component={Thankyou}
                            options={{ headerShown: false }} />



                    </>
                ) : null
                }
            </>




        </Stack.Navigator>
        // </NavigationContainer>
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