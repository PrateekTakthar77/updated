import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Delivery from '../Screens/TabScreens/Delivery'
import Carts from '../Screens/TabScreens/Carts'
import Filter from '../Screens/TabScreens/Filter'
import Drawer from './Drawer'
// import { Image } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar'


const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Drawer}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/home.png")} style={styles.IconSize} />
                        )
                    }
                }} />
            {/* <Tab.Screen name='Filter' component={Filter}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 80, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/filter.png")} style={styles.IconSize} />
                        )
                    }
                }}
            /> */}
            <Tab.Screen name='Cart' component={Carts}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/cart.png")} style={styles.IconSize} />
                        )
                    }
                }} />
            <Tab.Screen name='Delivery' component={Delivery}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/delivery.png")} style={styles.IconSize} />
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    IconSize: {
        width: 30,
        height: 30,
        resizeMode: "cover",
    },
})