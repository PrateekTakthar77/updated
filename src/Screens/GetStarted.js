// import React, { useEffect, useContext } from 'react';
// import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { SliderBox } from 'react-native-image-slider-box';
// import { AuthContext, AuthProvider } from "./AuthContext";
// const images = [
//     require('../assets/logo.png'),
//     require('../assets/logo.png'),
//     require('../assets/logo.png'),
// ]

// function GetStarted({ navigation }) {
//     return (
//         <View>
//             <View >
//                 <Image style={styles.logoStyle} source={require('../assets/logo.png')} />
//             </View>
//             <View style={{ marginTop: 20 }}>
//                 <SliderBox
//                     images={images}
//                     sliderBoxHeight={300}
//                     dotColor="#eec06b"
//                     inactiveDotColor="black"
//                     autoplay={true}
//                     autoplayInterval={1000}
//                     circleLoop={true} />
//             </View>
//             <View>
//                 <TouchableOpacity onPress={() => {
//                     navigation.navigate('loginsignup')
//                 }}>
//                     <View >
//                         <Text style={styles.GetStartedButtton}>Get Started</Text>
//                     </View>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }
// export default GetStarted;

// const styles = StyleSheet.create({
//     logoStyle: {
//         height: 250,
//         width: 200,
//         alignSelf: 'center'
//     },
//     GetStartedButtton: {
//         textAlign: "center",
//         backgroundColor: "#eec06b",
//         padding: 20,
//         marginTop: 40,
//         borderRadius: 80,
//         width: 240,
//         height: 70,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         fontSize: 20,
//         color: "black",
//         alignItems: "center",
//         alignSelf: "center"
//     }
// })


import React, { useEffect, useContext, useState, useRef } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


import Carousel, { Pagination } from "react-native-snap-carousel"
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const data = [
    {
        id: 1,
        name: "BTB E- Commerce Store",
        name2: "Buy Attractive jewellery for Store",
        img: require("../assets/jw3.png"),

        // url: "https://images.wallpaperscraft.com/image/single/wagon_light_flies_981679_240x320.jpg"
    },

    {
        id: 2,
        name: "BTB E- Commerce Store",
        name2: "Buy Attractive jewellery for Store",

        img: require("../assets/jw2.png"),

        // url: "https://images.wallpaperscraft.com/image/single/jellyfish_dark_tentacles_981656_240x320.jpg"
    },
    {
        id: 3,
        name: "BTB E- Commerce Store",
        name2: "Buy Attractive jewellery for Store",
        img: require("../assets/jw1.png"),
        // url: "https://images.wallpaperscraft.com/image/single/leaf_macro_veins_965714_240x320.jpg"
    },
]

const SnapCarousel = ({ item }) => {
    return (
        <View
            style={{
                padding: 20,
                borderRadius: 20,
                alignItems: 'center',
                backgroundColor: "lightble",
            }}>
            {/* <Image source={{ uri: item.url }} style={{ width: 400, height: 200, borderRadius: 20 }} /> */}
            <Image source={item.img} style={{ width: 200, height: 200, borderRadius: 20 }} />
            <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: "400", color: "#eec06b", fontSize: 20, }}>{item.name}</Text>
            <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: "600", fontSize: 14, color: "black" }}>{item.name2}</Text>
        </View>
    )
}

function GetStarted({ navigation }) {


    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null)

    return (
        <View>
            <View >
                <Image style={styles.logoStyle} source={require('../assets/logo.png')} />
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ paddingTop: 20, alignItems: "center" }}>
                    <Carousel
                        ref={isCarousel}
                        data={data}
                        renderItem={SnapCarousel}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        onSnapToItem={index => setIndex(index)}

                    />
                    <Pagination
                        dotsLength={data.length}
                        activeDotIndex={index}
                        carouselRef={isCarousel}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                            marginHorizontal: 0,
                            backgroundColor: "#bc9954"
                        }}

                    />
                </View>




            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('loginsignup')
                }}>
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




