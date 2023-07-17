import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import Delhi from '../Components/AllStates/Delhi'
import Maharastra from '../Components/AllStates/Maharastra'
import AndhraPradesh from '../Components/AllStates/AndhraPradesh'
import Gujarat from '../Components/AllStates/Gujarat'
import Bihar from '../Components/AllStates/Bihar'
import Jharkhand from '../Components/AllStates/Jharkhand'
import Westbengal from '../Components/AllStates/Westbengal'
import Uttrakhand from '../Components/AllStates/Uttrakhand'
import UttarPradesh from '../Components/AllStates/UttarPradesh'
import Tripura from '../Components/AllStates/Tripura'
import Telangana from '../Components/AllStates/Telangana'
import TamilNadu from '../Components/AllStates/TamilNadu'
import Sikkim from '../Components/AllStates/Sikkim'
import Rajasthan from '../Components/AllStates/Rajasthan'
import Punjab from '../Components/AllStates/Punjab'
import Odisha from '../Components/AllStates/Odisha'
import Nagaland from '../Components/AllStates/Nagaland'
import Mizoram from '../Components/AllStates/Mizoram'
import Meghalaya from '../Components/AllStates/Meghalaya'
import Manipur from '../Components/AllStates/Manipur'
import MadhyaPradesh from '../Components/AllStates/MadhyaPradesh'
import Kerala from '../Components/AllStates/Kerala'
import Karnatka from '../Components/AllStates/Karnatka'
import Jnk from '../Components/AllStates/Jnk'
import HimachalPradesh from '../Components/AllStates/HimachalPradesh'
import Haryana from '../Components/AllStates/Haryana'
import ArunachalPradesh from '../Components/AllStates/ArunachalPradesh'
import Assam from '../Components/AllStates/Assam'
import Goa from '../Components/AllStates/Goa'

const StatesDropDown = () => {
    return (
        <View>
            <View style={{ backgroundColor: "gold" }}>
                <ScrollView>
                    <Delhi />
                    <Gujarat />
                    <UttarPradesh />
                    <Uttrakhand />
                    <Maharastra />
                    <Rajasthan />
                    <Punjab />
                    <AndhraPradesh />
                    <ArunachalPradesh />
                    <Goa />
                    <Bihar />
                    <Jharkhand />
                    <Westbengal />
                    <Tripura />
                    <Telangana />
                    <TamilNadu />
                    <Sikkim />
                    <Odisha />
                    <Nagaland />
                    <Mizoram />
                    <Meghalaya />
                    <Manipur />
                    <MadhyaPradesh />
                    <Kerala />
                    <Karnatka />
                    <Jnk />
                    <Jharkhand />
                    <HimachalPradesh />
                    <Haryana />
                    <Assam />
                </ScrollView>
            </View>
        </View>
    )
}

export default StatesDropDown