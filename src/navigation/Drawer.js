// import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import Profile from '../Screens/DrawerScreens/Profile'
// import Gallery from '../Screens/DrawerScreens/Gallery'
// import FAQ from '../Screens/DrawerScreens/FAQ'
// import ContentGuidelines from '../Screens/DrawerScreens/ContentGuidelines'
// import PrivacyPolicy from '../Screens/DrawerScreens/PrivacyPolicy'
// import ContactUs from '../Screens/DrawerScreens/ContactUs'
// import Prizes from '../Screens/DrawerScreens/Prizes'
// import TnC from '../Screens/DrawerScreens/TnC'

// const Drawer = () => {
//     const DrawerNav = createDrawerNavigator()

//     return (
//         <DrawerNav.Navigator>
//             <DrawerNav.Screen name='Profile' component={Profile} />
//             <DrawerNav.Screen name='Gallery' component={Gallery} />
//             <DrawerNav.Screen name='FAQ' component={FAQ} />
//             <DrawerNav.Screen name='Contest Guidelines' component={ContentGuidelines} />
//             <DrawerNav.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
//             <DrawerNav.Screen name='Contact Us' component={ContactUs} />
//             <DrawerNav.Screen name='Prizes' component={Prizes} />
//             <DrawerNav.Screen name='T&C' component={TnC} />
//         </DrawerNav.Navigator>
//     )
// }

// export default Drawer

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../Screens/DrawerScreens/Profile'
import Gallery from '../Screens/DrawerScreens/Gallery'
import FAQ from '../Screens/DrawerScreens/FAQ'
import ContentGuidelines from '../Screens/DrawerScreens/ContentGuidelines'
import PrivacyPolicy from '../Screens/DrawerScreens/PrivacyPolicy'
import ContactUs from '../Screens/DrawerScreens/ContactUs'
import Prizes from '../Screens/DrawerScreens/Prizes'
import TnC from '../Screens/DrawerScreens/TnC'

const Drawer = () => {
    const DrawerNav = createDrawerNavigator()

    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Profile' component={Profile} />
            <DrawerNav.Screen name='Gallery' component={Gallery} />
            <DrawerNav.Screen name='FAQ' component={FAQ} />
            <DrawerNav.Screen name='Contest Guidelines' component={ContentGuidelines} />
            <DrawerNav.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
            <DrawerNav.Screen name='Contact Us' component={ContactUs} />
            <DrawerNav.Screen name='Prizes' component={Prizes} />
            <DrawerNav.Screen name='T&C' component={TnC} />
        </DrawerNav.Navigator>
    )
}

export default Drawer