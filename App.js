import React,{useContext,useEffect} from 'react'
import Navigation from './src/navigation/Navigation'
import Product from './src/Screens/Product'
import WelcomeScreen from './src/Screens/WelcomeScreen'
import Wait from './src/Screens/Wait'
// import LogIn from './src/Screens/LogIn'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from "./src/Screens/AuthContext";
import LogIn from './src/Screens/LogIn'

const Stack = createNativeStackNavigator();
const App = () => {
  const { userToken, isLoading } = useContext(AuthContext);

  // Display a splash screen while the isLoading state is true
  if (isLoading) {
    return <Wait />;
  }else
    return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken ? (
          <Stack.Screen name="Hello" component={WelcomeScreen} />
        ) : (
          <Stack.Screen
            name="SignUp"
            component={LogIn}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};