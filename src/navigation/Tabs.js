import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Carts from '../Screens/TabScreens/Carts'

import Delivery from '../Screens/TabScreens/Delivery'
import Filter from '../Screens/TabScreens/Filter'
import Home from '../Screens/TabScreens/Home'
import Drawer from './Drawer'

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name='Draw' component={Drawer} />
            <Tab.Screen name='HomeTab' component={Home} />
            <Tab.Screen name='FilterTab' component={Filter} />
            <Tab.Screen name='CartTab' component={Carts} />
            <Tab.Screen name='DeliveryTab' component={Delivery} />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})