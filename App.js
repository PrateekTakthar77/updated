import React, { useContext, useEffect } from 'react';
import Navigation from './src/navigation/Navigation';
import Product from './src/TO_BE_DELETED/Product';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import Wait from './src/Screens/Wait';
// import LogIn from './src/Screens/LogIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from './src/Screens/AuthContext';
import LogIn from './src/Screens/LogIn';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

// const Stack = createNativeStackNavigator();
const App = () => {
    const { isLoading } = useContext(AuthContext);

    // Display a splash screen while the isLoading state is true
    if (isLoading) {
        return <Wait />;
    } else return <Navigation />;
};

export default () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <App />
            </AuthProvider>
        </NavigationContainer>
    );
};
