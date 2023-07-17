import { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import MarqueeView from "react-native-marquee-view";
import { useNavigation } from '@react-navigation/native';
// import { moderateScale, } from '../utils/responsive';
import { moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { AuthContext } from '../AuthContext';





const WelcomeScreen = () => {

    const { width } = Dimensions.get('screen');

    const entries = [
        {
            img: require("../../assets/banner.jpg"),
        },
        {
            img: require("../../assets/banner.jpg"),
        },
        {
            img: require("../../assets/banner.jpg"),
        },

    ];

    const renderItem = ({ item, index }) => {
        return (
            <Image
                source={item.img}
                style={{
                    height: moderateScaleVertical(150),
                    width: moderateScale(280),
                    marginTop: moderateScaleVertical(30),
                    borderRadius: 20,
                    marginBottom: moderateScaleVertical(20),
                }}
            />
        );
    };

    const navigation = useNavigation()

    const { userInfo, userDetails } = useContext(AuthContext);
    console.log(`/.//../././..//.//./`, userDetails);

    // const { payload: user } = userInfo;
    const check = () => {
        console.log("hello checked");
    }

    return (
        <>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.goldenBoxAlignment}>
                        <View style={styles.BoxStyle}>
                            <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                {/* <View style={{flex:"1 1 0"}}> */}
                                <View style={styles.align}>
                                    <View style={{ flexDirection: "row", marginHorizontal: -58, justifyContent: "space-around", }}>
                                        <View style={styles.logoutButton}>
                                            <Text style={styles.Welcome}>Welcome,</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Image source={require("../../assets/notification.png")} style={{ width: 30, height: 30 }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <Text style={styles.name}>{userInfo?.name}</Text>
                                    <Text style={styles.abcjw}>{userDetails?.brandName}</Text>
                                </View>
                                <View style={styles.align2}>
                                    <Text style={styles.toapp}>Welcome to our app! we have thrilled to have you here.</Text>
                                    <Text style={styles.toapp2}>Enjoy Shopping!😊</Text>
                                </View>
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

                    <TouchableOpacity onPress={() => navigation.navigate('pricelist')}>
                        <View style={styles.button} onPress={check} >
                            <Text style={styles.buttontext}>WASTAGE CHART</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity>
                        <View style={styles.button} onPress={() => navigation.navigate('product')} >
                            <Text style={styles.buttontext}>PRODUCTS</Text>
                        </View>
                    </TouchableOpacity> */}


                    {/* <View style={styles.slider}>
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
                    </View> */}


                    {/* // Parallax */}

                    <Carousel
                        data={entries}
                        renderItem={renderItem}
                        sliderWidth={width}
                        itemWidth={300}
                        loop
                        firstItem={1}
                    />
                    {/* <Pagination
                        dotsLength={entries.length}
                        // activeDotIndex={index}
                        // carouselRef={isCarousel}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                            marginHorizontal: 0,
                            backgroundColor: "#bc9954",
                            marginVertical: 10,
                        }} /> */}
                    {/* // Parallax */}

                    <View style={styles.line}></View>

                    {/* <View style={styles.span3}> */}
                    <View style={styles.span}>
                        <Image source={require("../../assets/1.png")} style={styles.imgsize1} />
                        <Image source={require("../../assets/2.png")} style={styles.imgsize2} />
                        <Image source={require("../../assets/3.png")} style={styles.imgsize3} />
                        <Image source={require("../../assets/4.png")} style={styles.imgsize4} />
                    </View>
                    <View style={styles.span2}>
                        <Image source={require("../../assets/5.png")} style={styles.imgsize5} />
                        <Image source={require("../../assets/6.png")} style={styles.imgsize6} />
                    </View>

                    {/* COLOMN 8 -------------------------------*/}
                    {/* <TouchableOpacity>
                        <View style={styles.appointmentbutton}>
                            <Text style={styles.appointmentlogintext}>Request Appointment</Text>
                        </View>
                    </TouchableOpacity> */}
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
    logoutButton: {
        // flexDirection: "row",
        // paddingHorizontal: 10
        // justifyContent: "space-around",
    },
    logoutText: {
        fontSize: 15,
        marginRight: 35,
        color: "#eec06b",
        backgroundColor: "black",
        padding: 5,
        borderRadius: 10
    },
    goldenBoxAlignment: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    BoxStyle: {
        borderRadius: 40,
        marginTop: 30,
        backgroundColor: "#eec06b",
        height: 200,
        width: 380,
    },

    align: {
        display: 'flex',
        flexDirection: "column",
        marginLeft: 25,
        marginTop: 15,
    },
    align2: {
        display: 'flex',
        flexDirection: "column",
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
        fontSize: 25,
        marginLeft: -27,
        // marginBottom: 10
        // fontWeight: 500,
        // marginTop: -10,
        // marginLeft: -1,
        // marginBottom: 7,
    },
    name: {
        fontSize: 20,
        // fontWeight: 500,
        // marginTop: -10,
        // marginRight: 210,
        marginLeft: 4,
        marginBottom: 2,
        fontWeight: "600",
        color: "black",
        // fontWeight: "bold",

    },
    abcjw: {
        fontSize: 15,
        marginLeft: 6,
        marginBottom: 17,
        fontWeight: "bold",
    },
    toapp: {
        fontSize: 12,
        // marginTop: 12,
        marginLeft: 6,
        marginBottom: 10,
        fontWeight: "bold",
    },
    toapp2: {
        fontSize: 12,
        marginTop: -6,
        marginLeft: 6,
        marginBottom: 7,
        fontWeight: "bold",
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
        marginTop: 40,
        backgroundColor: "black",
        padding: 15,
        alignItems: "center",
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        width: 160,
        justifyContent: "center",
        height: 50,
        alignSelf: 'center'
    },
    buttontext: {
        fontSize: 14,
        color: "#eec06b",
        fontWeight: "bold",
        // fontWeight: 500,
    },

    //   COLOMN 5---------------------------

    slider: {
        marginTop: 50,
    },

    //   COLOMN 6---------------------------
    line: {
        width: "80%",
        height: 1,
        backgroundColor: "#a4a4a4",
        // textAlign: "center",
        // marginLeft: 50,
        // marginBottom: 8,
        marginTop: 10,
        alignSelf: 'center'
        //   COLOMN 7---------------------------
    },
    span: {
        marginTop: 20,
        flexDirection: "row",
        // alignItems:"center",
        // paddingHorizontal: 20,
        // marginRight: 20,
        alignItems: "center",
        justifyContent: "space-around",
        marginHorizontal: 40,
        marginVertical: -5,
        marginBottom: 2,

    },
    span2: {
        marginTop: 25,
        flexDirection: "row",
        // paddingHorizontal: 10,
        // marginLeft: 80,
        // marginBottom: 5,
        alignItems: "center",
        justifyContent: "space-around",
        marginHorizontal: 140,
    },
    size: {
        width: 50,
        height: 20,
        paddingHorizontal: 0,
        marginRight: -40,
        marginLeft: 20,
    },
    imgsize1: {
        width: 52,
        height: 32,
    },
    imgsize2: {
        width: 52,
        height: 32,
    },
    imgsize3: {
        width: 69,
        height: 35,
    },
    imgsize4: {
        width: 64,
        height: 28,
    },
    imgsize5: {
        width: 55,
        height: 35,
    },
    imgsize6: {
        width: 54,
        height: 30,
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
        textAlign: 'center'
        // justifyContent: "center",
    },
});    