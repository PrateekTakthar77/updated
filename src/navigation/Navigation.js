import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from "react-native";

import Splash from '../Screens/Splash';
import GetStarted from '../Screens/GetStarted';
import LogInSignUp from '../Screens/LogInSignUp';
import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import FormDetails from '../Screens/FormDetails';
import TaxInvoice from '../Screens/TaxInvoice';
import OTP from '../Screens/OTP';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Cart from '../Screens/Cart';
import SingleProduct from '../Screens/SingleProduct';
import Product from '../Screens/Product';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='splash' options={{ headerShown: false }}>

                {/* SPLASH */}
                <Stack.Screen
                    name="splash"
                    component={Splash}
                    options={{ headerShown: false, title: 'My home' }} />

                {/* GET STARTED*/}
                <Stack.Screen
                    name="getstarted"
                    component={GetStarted}
                    options={{ headerShown: false, title: 'My home' }} />

                {/* LOGIN-SIGNUP */}
                <Stack.Screen
                    name="loginsignup"
                    component={LogInSignUp}
                    options={{ headerShown: false }} />

                {/* LOG IN */}
                <Stack.Screen
                    name="login"
                    component={LogIn}
                    options={{
                        title: '',
                        headerStyle: { backgroundColor: 'white' },
                        headerTintColor: '#bc9954',
                        headerTitleStyle: { color: '#bc9954' }
                    }} />

                {/* SIGN UP */}
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

                {/* FORM DETAILS */}
                <Stack.Screen
                    name="formdetails"
                    component={FormDetails}
                    options={{
                        title: '',
                        headerStyle: { backgroundColor: 'black', },
                        headerTintColor: '#bc9954',
                        headerTitleStyle: { color: '#bc9954' }
                    }} />

                {/* WELCOME SCREEN */}
                <Stack.Screen
                    name="welcomeScreen"
                    component={WelcomeScreen} options={{
                        title: '',
                        headerStyle: { backgroundColor: 'black', },
                        headerTintColor: '#bc9954',
                        headerTitleStyle: { color: '#bc9954' }
                    }} />

                {/* TAX INVOICE */}
                <Stack.Screen
                    name="taxinvoice"
                    component={TaxInvoice}
                    options={{
                        title: '',
                        headerStyle: { backgroundColor: 'black' },
                        headerTintColor: '#bc9954',
                        headerTitleStyle: { color: '#bc9954' }
                    }} />


                {/* OTP */}
                <Stack.Screen
                    name="otp"
                    component={OTP}
                    options={{
                        title: '',
                        headerStyle: { backgroundColor: 'black' },
                        headerTintColor: '#bc9954',
                        headerTitleStyle: { color: '#bc9954' }
                    }} />

                {/* CART */}
                <Stack.Screen
                    name="cart"
                    component={Cart}
                    options={{
                        title: '',
                        headerStyle: { backgroundColor: 'black' },
                        headerTintColor: '#bc9954',
                        headerTitleStyle: { color: '#bc9954' }
                    }} />

                {/* SINGLE PRODUCT */}
                <Stack.Screen
                    name="singleproduct"
                    component={SingleProduct}
                    options={{
                        title: '',
                        headerStyle: { backgroundColor: 'black' },
                        headerTintColor: '#bc9954',
                        headerTitleStyle: { color: '#bc9954' }
                    }} />

                {/* Product */}
                <Stack.Screen
                    name="product"
                    component={Product}
                    options={{
                        title: '',
                        headerStyle: { backgroundColor: 'black' },
                        headerTintColor: '#bc9954',
                        headerTitleStyle: { color: '#bc9954' }
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
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