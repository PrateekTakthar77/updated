import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
const images = [
    require('../assets/logo.png'),
    require('../assets/logo.png'),
    require('../assets/logo.png'),
]

function GetStarted({ navigation }) {
    return (
        <View>
            <View >
                <Image style={styles.logoStyle} source={require('../assets/logo.png')} />
            </View>
            <View style={{ marginTop: 20 }}>
                <SliderBox
                    images={images}
                    sliderBoxHeight={300}
                    dotColor="#eec06b"
                    inactiveDotColor="black"
                    autoplay={true}
                    autoplayInterval={1000}
                    circleLoop={true} />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('loginsignup')}>
                    <View >
                        <Text style={styles.GetStartedButtton}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default GetStarted;

const styles = StyleSheet.create({
    logoStyle: {
        height: 250,
        width: 200,
        alignSelf: 'center'
    },
    GetStartedButtton: {
        textAlign: "center",
        backgroundColor: "#eec06b",
        padding: 20,
        marginTop: 40,
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 20,
        color: "black",
        alignItems: "center",
        alignSelf: "center"
    }
})