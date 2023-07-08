import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import MarqueeView from "react-native-marquee-view";
import { SliderBox } from "react-native-image-slider-box";

const WelcomeScreen = ({ navigation }) => {
    const images = [
        require("../assets/logo.png"),
        require("../assets/logo.png"),
        require("../assets/logo.png"),
        // require("../assets/img1.jpg"),
        // require("../assets/img2.jpg"),
        // require("../assets/img3.jpg"),
    ];
    const check = () => {
        console.log("hello checked");
    }

    return (
        <>
            <ScrollView>

                <View style={styles.main}>

                    <View style={styles.goldenBoxAlignment}>
                        <View style={styles.BoxStyle}>

                            <View style={styles.align}>
                                <Text style={styles.Welcome}>Welcome ,</Text>
                                <Text style={styles.name}>Amir Alvi</Text>
                                <Text style={styles.abcjw}>Abc jewellers private limited</Text>
                            </View>
                            <View style={styles.align2}>
                                <Text style={styles.toapp}>Welcome to our app! we have thrilled to have you here.</Text>
                                <Text style={styles.toapp2}>Enjoy Shopping!</Text>
                            </View>

                        </View>
                    </View>

                    <MarqueeView>
                        <View style={styles.marq1}>
                            <Text>
                                995 rate: Rs 45,000 | Fine rate: red | Gold MCX: Rs 50,000 995
                                rate: Rs 45,000 | Fine rate: rs720000 | Gold MCX: Rs 50,000
                            </Text>
                        </View>
                    </MarqueeView>


                    <View style={styles.Buttonspan}>
                        <TouchableOpacity onPress={() => navigation.navigate('product')}>
                            <View style={styles.loginbutton}>
                                <Text style={styles.logintext}>18KT</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('product')}>
                            <View style={styles.loginbutton}>
                                <Text style={styles.logintext}>20KT</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('product')}>
                            <View style={styles.loginbutton}>
                                <Text style={styles.logintext}>22KT</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('product')}>
                            <View style={styles.loginbutton}>
                                <Text style={styles.logintext}>COINS</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('product')}>
                            <View style={styles.loginbutton}>
                                <Text style={styles.logintext2}>DIGITAL GOLD</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('product')}>
                        <View style={styles.button} onPress={check} >
                            <Text style={styles.buttontext}>PRODUCTS</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <View style={styles.button} onPress={() => navigation.navigate('product')} >
                            <Text style={styles.buttontext}>PRODUCTS</Text>
                        </View>
                    </TouchableOpacity> */}


                    <View style={styles.slider}>
                        <SliderBox
                            images={images}
                            sliderBoxHeight={170}
                            inactiveDotColor="black"
                            imageLoadingColor="black"
                            ImageComponentStyle={{ borderRadius: 30, width: "80%" }}
                            dotStyle={{ width: 7, height: 7, borderRadius: 50, marginHorizontal: 0, }}
                            autoplay={false}
                            autoplayInterval={100}
                            dotColor="#eec06b"
                            paginationBoxVerticalPadding={10}
                            circleLoop={true}

                        />
                    </View>
                    {/* COLOMN 6 -------------------------------*/}

                    <View style={styles.line}></View>

                    {/* COLOMN 7 -------------------------------*/}
                    {/* <View style={styles.span3}> */}
                    <View style={styles.span}>
                        <Image source={require("../assets/logo.png")} style={styles.size} />
                        <Image source={require("../assets/logo.png")} style={styles.size} />
                        <Image source={require("../assets/logo.png")} style={styles.size} />
                        <Image source={require("../assets/logo.png")} style={styles.size} />
                    </View>
                    <View style={styles.span2}>
                        <Image source={require("../assets/logo.png")} style={styles.size2} />
                        <Image source={require("../assets/logo.png")} style={styles.size2} />
                    </View>

                    {/* COLOMN 8 -------------------------------*/}
                    <TouchableOpacity>
                        <View style={styles.appointmentbutton}>
                            <Text style={styles.appointmentlogintext}>Request Appointment</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    main: {
        // backgroundColor: "white",
    },

    goldenBoxAlignment: {
        justifyContent: "center",
        alignItems: "center",

    },
    BoxStyle: {
        borderRadius: 40,
        marginTop: 30,
        backgroundColor: "#eec06b",
        height: 170,
        width: 380,
    },

    align: {
        flexDirection: "colomn",
        marginLeft: 25,
        marginTop: 15,
    },
    align2: {
        flexDirection: "colomn",
        marginLeft: 25,
        marginTop: 15,
    },
    textStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    Welcome: {
        fontSize: 20,
        // fontWeight: 500,
        // marginTop: -10,
        // marginLeft: -1,
        // marginBottom: 7,
    },
    name: {
        fontSize: 20,
        // fontWeight: 500,
        marginTop: -10,
        // marginRight: 210,
        marginLeft: -1,
        marginBottom: 7,
        fontWeight: "bold",
    },
    abcjw: {
        fontSize: 13,
        marginTop: -10,
        marginLeft: -1,
        marginBottom: 17,
    },
    toapp: {
        fontSize: 12,
        marginTop: 12,
        marginLeft: -1,
        marginBottom: 7,
        fontWeight: "bold",
    },
    toapp2: {
        fontSize: 12,
        fontWeight: "bold",
        marginTop: -6,
        marginLeft: -1,
        marginBottom: 7,
    },

    // COLOMN 2---------------------------

    Marquee: {
        backgroundColor: "white",
        // backgroundColor: "black",
        width: 400,
    },
    marq1: {
        marginTop: 10,
        backgroundColor: "#edf0e6",
        marginRight: 120,
    },

    // COLOMN 3---------------------------

    Buttonspan: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        paddingHorizontal: 0,
        // alignSelf:'center',
    },
    loginbutton: {
        backgroundColor: "#eec06b",
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
        width: 60,
        height: 60,
        marginTop: 30,
        alignSelf: 'center'
        // marginLeft: 20,
        // marginRight: ,
    },
    logintext: {
        fontSize: 12,
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    logintext2: {
        fontSize: 12,
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },

    // COLOMN 4---------------------------

    button: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 50,
        alignItems: "center",
        borderRadius: 80,
        justifyContent: "center",
        // marginLeft: 134,
        alignItems: "center",
        width: 160,
        justifyContent: "center",
        height: 50,
        alignSelf: 'center'
    },
    buttontext: {
        fontSize: 14,
        color: "#eec06b",
        // fontWeight: "bold",
        // fontWeight: 500,
    },

    //   COLOMN 5---------------------------

    slider: {
        marginTop: 50,
    },

    //   COLOMN 6---------------------------
    line: {
        width: 320,
        height: 1,
        backgroundColor: "#a4a4a4",
        textAlign: "center",
        marginLeft: 50,
        // marginBottom: 8,
        marginTop: 50,
        //   COLOMN 7---------------------------
    },
    span: {
        flexDirection: "row",
        // alignItems:"center",
        paddingHorizontal: 20,
        marginRight: 20,
    },
    span2: {
        flexDirection: "row",
        paddingHorizontal: 10,
        marginLeft: 80,
        marginBottom: 5,
    },
    size: {
        width: 100,
        height: 80, paddingHorizontal: 0,
        marginRight: -40,
        marginLeft: 20,
    },
    size2: {
        width: 100,
        height: 80,
        marginRight: -25,
        marginLeft: 15,
        // marginTop: -35,
        marginTop: -30,
    },
    span3: {
        paddingVertical: 5,
    },

    //   COLOMN 8---------------------------
    appointmentbutton: {
        backgroundColor: "#eec06b",
        borderRadius: 17,
        // justifyContent:"flex-end",
        width: 100,
        height: 35,
        marginTop: -50,
        marginLeft: 310,
        // marginRight: -100,
    },
    appointmentlogintext: {
        fontSize: 10,
        color: "black",
        fontWeight: "bold",
        marginLeft: 43,
        textAlign:'center'
        // justifyContent: "center",
    },
});    