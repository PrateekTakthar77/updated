import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, FlatList, Modal, TextInput } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import MarqueeView from "react-native-marquee-view";
import { SliderBox } from "react-native-image-slider-box";

import { AuthContext } from './AuthContext';

const WelcomeScreen = ({ navigation }) => {
    const { login, logout, isLoading, userToken, userInfo, register, userDetails, updateUserDetails, getUserDetails } = useContext(AuthContext);
    const images = [
        require("../assets/logo.png"),
        require("../assets/logo.png"),
        require("../assets/logo.png"),
    ];
    const { payload: user } = userInfo;
    console.log(`userinfo`,userInfo);
    console.log(`userdetails from welcome screen *****`,userDetails)
    console.log(`userdetails from welcome screen ((@))`,userDetails.userDetails.brandName)
    console.log(`userdetails from welcome screen ((@))`,userDetails.mobile)
    // console.log(`userdetails from welcome screen`,brandName)

    // console.log("userInfo - Welcomescreen", userInfo);

    const [data, setData] = useState([]);
    // const dispatch = useDispatch();

    const getAPIDATA = async () => {
        const url = "https://jwells-bliss-deploy2.up.railway.app/api/products/";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getAPIDATA();
    }, []);

    const OpenUserDetails = () => {
        setShowModal(true);
    }
    const [showModal, setShowModal] = useState(false);

    return (
        <View>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.goldenBoxAlignment}>
                        <View style={styles.BoxStyle}>
                            <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                {/* <View style={{flex:"1 1 0"}}> */}
                                <View style={styles.align}>

                                    <View style={styles.logoutButton}>
                                        <Text style={styles.Welcome}>Welcome,</Text>
                                        <View style={{ marginLeft: 10 }}>
                                            <TouchableOpacity onPress={logout}>
                                                <Text style={styles.logoutText}>Logout</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={OpenUserDetails}>
                                        <Text style={styles.name}>{user?.name}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.abcjw}>{userDetails.userDetails.brandName}</Text>
                                </View>
                                <View style={styles.align2}>
                                    <Text style={styles.toapp}>Welcome to our app! we have thrilled to have you here.</Text>
                                    <Text style={styles.toapp2}>Enjoy Shopping!</Text>
                                </View>
                                {/* <View style={{ marginLeft: 10 }}>
                                    <TouchableOpacity onPress={logout}>
                                        <Text style={{ fontSize: 20, marginLeft: 15 }}>Logout</Text>
                                    </TouchableOpacity>
                                </View> */}
                                {/* </View> */}
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

                    <TouchableOpacity onPress={() => navigation.navigate('wastage')}>
                        <View style={styles.button}>
                            <Text style={styles.buttontext}>WASTAGE CHART</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <View style={styles.button} onPress={() => navigation.navigate('product')} >
                            <Text style={styles.buttontext}>PRODUCTS</Text>
                        </View>
                    </TouchableOpacity> */}


                    <View style={styles.slider}>
                        {/* <SliderBox
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

                        /> */}
                        {/* <View>
                            <FlatList contentContainerStyle={{ alignItems: "center" }}
                                data={data}
                                numColumns={2}
                                renderItem={({ item, index }) => <View key={index} style={styles.View1}>
                                    <TouchableOpacity onPress={() => handlePress(item)} style={styles.View2}>
                                        <View style={styles.View3}>
                                            <Image style={styles.View4} source={{ uri: item.images[0] }} />
                                            <Text style={styles.View5}>{item?.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>}
                            />
                        </View> */}
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
                    {/* <TouchableOpacity>
                        <View style={styles.appointmentbutton}>
                            <Text style={styles.appointmentlogintext}>Request Appointment</Text>
                        </View>
                    </TouchableOpacity> */}

                </View>

            </ScrollView>
            <Modal Modal visible={showModal} animationType="slide" onRequestClose={() => setShowModal(false)} >
                <ScrollView>
                    <View style={styles.main}>

                        <View style={styles.image}>
                            <Image source={require("../assets/logo.png")} style={styles.imageSize} />
                        </View>

                        <View style={styles.FormDetailsTitle}>
                            <Text style={styles.FormDetailsText}>User Details</Text>
                        </View>

                        {/* Input Elements Alignment */}

                        <View style={{margin:20}}>

                            {/* Brand name */}
                            <Text style={styles.name}>{user?.name}</Text>

                            <Text style={styles.name}>{userDetails.mobile}</Text>
                            <Text style={styles.name}>{user?.email}</Text>
                        </View>
                    </View>
                </ScrollView>
            </Modal >

        </View >
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    main: {
        // backgroundColor: "white",
    },
    logoutButton: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -97,
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
        fontSize: 20,
        marginLeft: 5,
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
        marginLeft: -1,
        marginBottom: 2,
        fontWeight: "600",
        color: "black",
        // fontWeight: "bold",

    },
    abcjw: {
        fontSize: 13,
        marginLeft: -1,
        marginBottom: 17,
        fontWeight: "bold",
    },
    toapp: {
        fontSize: 12,
        // marginTop: 12,
        marginLeft: -1,
        marginBottom: 10,
        fontWeight: "bold",
    },
    toapp2: {
        fontSize: 12,
        marginTop: -6,
        marginLeft: -1,
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
        marginTop: 50,
        alignSelf: 'center'
        //   COLOMN 7---------------------------
    },
    span: {
        flexDirection: "row",
        // alignItems:"center",
        // paddingHorizontal: 20,
        // marginRight: 20,
        alignItems: "center",
        // justifyContent:'center'
    },
    span2: {
        flexDirection: "row",
        // paddingHorizontal: 10,
        // marginLeft: 80,
        // marginBottom: 5,
        alignItems: "center",
        justifyContent: 'center'
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
        textAlign: 'center'
        // justifyContent: "center",
    },
    // MODAL

    modalAlignMent: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalStyle: {
        backgroundColor: "#eec06b",
        padding: 50,
        borderRadius: 50,
        width: 350
    },

    modalSignUpText: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000',
        marginTop: -25,
    },

    line: {
        width: "140%",
        height: 2,
        backgroundColor: "#000",
        margin: 0,
        alignSelf: 'center',
        marginTop: 10,
    },

    ModalLogInButtonAlignment: {
        alignItems: 'center',
        marginTop: 20
    },

    Modalloginbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 30,
        borderRadius: 80,
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Modallogintext: {
        fontSize: 20,
        color: "#eec06b",
    },

    ModalSignUpButtonAlignment: {
        alignItems: 'center'
    },

    Modalsignupbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 30,
        borderRadius: 80,
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Modalsignuptext: {
        fontSize: 20,
        color: "#eec06b",
    },
    body: {
        // backgroundColor: "white",
        // marginLeft:40,
        // marginRight:40,
    },

    main: {
        maxWidth: 500,
        margin: 0,
        textAlign: "center",
    },

    SkipButton: {
        alignItems: 'flex-end',
        marginTop: 10,
        marginRight: 10,
    },

    SkipButtonText: {
        color: "#bc9954",
        fontSize: 14,
        fontWeight: 'bold',
    },

    image: {
        alignSelf: 'center',
        marginTop: -45,
    },

    imageSize: {
        width: 300,
        height: 300,
        resizeMode: "cover",
    },

    FormDetailsTitle: {
        alignSelf: 'center'
    },

    FormDetailsText: {
        fontSize: 20,
        marginTop: -50,
        textAlign: "center",
        color: "black"

    },

    // InputButton CSS

    // InputsAlignment: {
    //     alignSelf: 'center',

    // },
    // BrandName Css
    Brandnameinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        lineHeight: 15,
        marginTop: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "80%",
        paddingBottom: 0,
        paddingLeft: 0,
        alignSelf: 'center',
    },

    // Address Css
    Addressinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 0,
        lineHeight: 25,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "80%",
        paddingBottom: 0,
        paddingLeft: 0,
        alignSelf: 'center',
    },

    // PinCode CSS
    Pincodeinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 0,
        lineHeight: 25,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },

    // Locality CSS
    Localityinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // City Css
    Cityinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // State CSS
    Stateinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // GST CSS
    GSTinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "80%",
        paddingBottom: 0,
        paddingLeft: 0,
        alignSelf: 'center',
    },
    // Store Person 1 CSS
    StorePersonNameinputbottom1: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // contact No 1 CSS
    contactnoinputbottom1: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },

    // Store Person 2 CSS
    StorePersonNameinputbottom2: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // contact No 2
    contactnoinputbottom2: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },

    // Store Person 3 CSS
    StorePersonNameinputbottom3: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // contact No 3 CSS
    contactnoinputbottom3: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // GPS Location CSS
    GPSinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        lineHeight: 10,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "80%",
        paddingBottom: 0,
        paddingLeft: 0,
        alignSelf: 'center',
    },
    bottom: {
        width: 100,
        height: 5,
    },

    span: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 0,
    },

    submitButtonAlignment: {
        alignItems: "center",
    },

    submitButton: {
        backgroundColor: "#eec06b",
        padding: 20,
        marginTop: 40,
        alignItems: "center",
        borderRadius: 70,
        width: 240,
        height: 70,
        justifyContent: "center",

    },

    submitButtonText: {
        fontSize: 20,
        color: "black",
        fontWeight: "500",

    },
});    