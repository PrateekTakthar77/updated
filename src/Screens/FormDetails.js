import React, { useState, useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { AuthContext } from './AuthContext';
import { updateUserDetails } from './FormDetails/fillDetails/FormDetails.service';
import { fillDetails } from './FormDetails/fillDetails/FormDetails.action-creator';
import { useSelector, useDispatch } from 'react-redux';

const FormDetails = ({ navigation }) => {
    const { userToken } = useContext(AuthContext);
    const userDetails = useSelector((state) => state.userDetails);
    const dispatch = useDispatch();
    const [brandName, setBrandName] = useState(null);
    const [address, setAddress] = useState(null);
    const [pincode, setPincode] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [locality, setLocality] = useState(null);
    const [gstNo, setGstno] = useState(null);
    const [storePersonName, setstorePersonName] = useState(null);
    const [contactNo, setContactNo] = useState(null);
    const [gpsLocation, setGpsLocation] = useState({
        latitude: 37.779,
        longitude: -122.4194,
    });

    // console.log(fillDetails);

    useEffect(() => {
        if (!userToken) {
            return;
        }
        if (userDetails) {
            navigation.navigate('welcomeScreen');
            return;
        }
    }, [userToken, userDetails]);

    const submitData = () => {
        const userDetails = {
            brandName,
            address,
            pincode,
            city,
            locality,
            state,
            gstNo,
            storePersonName,
            contactNo,
            gpsLocation,
        };
        console.log(`userdetails ??????????????????????`, userDetails);
        dispatch(fillDetails(userToken, userDetails));
        console.log(`Details filled in the form `, userToken);
        // console.log(fillDetails.toString);
        navigation.navigate('welcomescreen');
    };

    // const handleSkip = async () => {
    //     const userDetailsData = {
    //         brandName,
    //         address,
    //         pincode,
    //         city,
    //         state,
    //         locality,
    //         gstNo,
    //         storePersonName,
    //         contactNo,
    //         gpsLocation,
    //     };
    //     try {
    //         const updatedUserDetails = await updateUserDetails(userToken);
    //         if (updatedUserDetails) {
    //             // Dispatch an action to update the user details in the Redux store
    //             dispatch(fillDetails(updatedUserDetails));
    //             // Navigate to the welcomeScreen or any other desired screen
    //             navigation.navigate('welcomeScreen');
    //         }
    //     } catch (error) {
    //         console.log(`Error updating user details: ${error}`);
    //     }
    // };

    return (
        <ScrollView>
            <View style={styles.body}>
                {/* Skip button */}

                <TouchableOpacity
                    style={styles.SkipButton}
                    onPress={() => navigation.navigate('welcomescreen')}
                >
                    <Text style={styles.SkipButtonText}>Skip&nbsp;{'>>'}</Text>
                </TouchableOpacity>

                <View style={styles.main}>
                    <View style={styles.image}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.imageSize}
                        />
                    </View>

                    <View style={styles.FormDetailsTitle}>
                        <Text style={styles.FormDetailsText}>Form Details</Text>
                    </View>

                    {/* Input Elements Alignment */}

                    <View>
                        {/* Brand name */}

                        <TextInput
                            style={styles.Brandnameinputbottom}
                            autoCapitalize
                            autoCorrect={false}
                            placeholder="Brand name"
                            placeholderTextColor="#a4a4a4"
                            onChangeText={setBrandName}
                        />
                        {/*Address*/}
                        <TextInput
                            style={styles.Addressinputbottom}
                            autoCapitalize
                            autoCorrect={false}
                            placeholder="Address"
                            placeholderTextColor="#a4a4a4"
                            onChangeText={setAddress}
                        />
                        {/* ----------------------------------------------------------------------------- */}

                        {/* Pin Code */}

                        <View style={styles.span}>
                            <TextInput
                                style={styles.Pincodeinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Pincode"
                                placeholderTextColor="#a4a4a4"
                                onChangeText={setPincode}
                            />

                            {/* Locality */}

                            <TextInput
                                style={styles.Localityinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Locality"
                                placeholderTextColor="#a4a4a4"
                                onChangeText={setLocality}
                            />
                        </View>

                        {/* ----------------------------------------------------------------------------- */}

                        {/* City*/}

                        <View style={styles.span}>
                            <TextInput
                                style={styles.Cityinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="City"
                                placeholderTextColor="#a4a4a4"
                                onChangeText={setCity}
                            />

                            {/*State*/}

                            <TextInput
                                style={styles.Stateinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="State"
                                placeholderTextColor="#a4a4a4"
                                onChangeText={setState}
                            />
                        </View>

                        {/* -------------------------------------------------------------------------------------------------- */}

                        {/*GST No.*/}

                        <TextInput
                            style={styles.GSTinputbottom}
                            autoCapitalize
                            autoCorrect={false}
                            placeholder="GST no."
                            placeholderTextColor="#a4a4a4"
                            onChangeText={setGstno}
                        />

                        {/* -------------------------------------------------------------------------------------------------- */}

                        {/* Common */}

                        {/*Store Person Name 1*/}
                        <View style={styles.span}>
                            <TextInput
                                style={styles.StorePersonNameinputbottom1}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Store Person Name"
                                placeholderTextColor="#a4a4a4"
                                onChangeText={setstorePersonName}
                            />

                            {/* Contact No */}

                            <TextInput
                                style={styles.contactnoinputbottom1}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Contact no."
                                placeholderTextColor="#a4a4a4"
                                onChangeText={setContactNo}
                            />
                        </View>

                        {/* -------------------------------------------------------------------------------------------------- */}
                        {/* Common */}

                        {/*Store Person Name 2*/}
                        {/* <View style={styles.span}>
                            <TextInput
                                style={styles.StorePersonNameinputbottom2}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Store Person Name"
                                placeholderTextColor="#a4a4a4"
                            /> */}

                        {/* Contact No */}

                        {/* <TextInput
                                style={styles.contactnoinputbottom2}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="contact no."
                                placeholderTextColor="#a4a4a4"

                            />
                        </View> */}

                        {/* -------------------------------------------------------------------------------------------------- */}
                        {/* Common */}

                        {/*Store Person Name 3*/}
                        {/* 
                        <View style={styles.span}>
                            <TextInput
                                style={styles.StorePersonNameinputbottom3}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Store Person Name"
                                placeholderTextColor="#a4a4a4"
                            /> */}

                        {/* Contact No */}

                        {/* <TextInput
                                style={styles.contactnoinputbottom3}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="contact no"
                                placeholderTextColor="#a4a4a4"
                            />
                        </View> */}

                        {/*GPS Location*/}
                        {/* <TextInput
                            style={styles.GPSinputbottom}
                            autoCorrect={false}
                            placeholder="GPS Location"
                            placeholderTextColor="#a4a4a4"
                            onChangeText={setGpsLocation}

                        /> */}
                    </View>

                    {/* Submit Button */}

                    <TouchableOpacity
                        style={styles.submitButtonAlignment}
                        onPress={submitData}
                    >
                        <View style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const mapStateToProps = (state) => ({
    userDetails: state.formDetails,
});

const mapDispatchToProps = {
    fillDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDetails);

const styles = StyleSheet.create({
    body: {
        // backgroundColor: "white",
        // marginLeft:40,
        // marginRight:40,
    },

    main: {
        maxWidth: 500,
        margin: 0,
        textAlign: 'center',
    },

    SkipButton: {
        alignItems: 'flex-end',
        marginTop: 10,
        marginRight: 10,
    },

    SkipButtonText: {
        color: '#bc9954',
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
        resizeMode: 'cover',
    },

    FormDetailsTitle: {
        alignSelf: 'center',
    },

    FormDetailsText: {
        fontSize: 20,
        marginTop: -50,
        textAlign: 'center',
        color: 'black',
    },

    // InputButton CSS

    // InputsAlignment: {
    //     alignSelf: 'center',

    // },
    // BrandName Css
    Brandnameinputbottom: {
        borderWidth: 1,
        color: '#7d7d7d',
        lineHeight: 15,
        marginTop: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '80%',
        paddingBottom: 0,
        paddingLeft: 0,
        alignSelf: 'center',
    },

    // Address Css
    Addressinputbottom: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 0,
        lineHeight: 25,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '80%',
        paddingBottom: 0,
        paddingLeft: 0,
        alignSelf: 'center',
    },

    // PinCode CSS
    Pincodeinputbottom: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 0,
        lineHeight: 25,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },

    // Locality CSS
    Localityinputbottom: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // City Css
    Cityinputbottom: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // State CSS
    Stateinputbottom: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // GST CSS
    GSTinputbottom: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '80%',
        paddingBottom: 0,
        paddingLeft: 0,
        alignSelf: 'center',
    },
    // Store Person 1 CSS
    StorePersonNameinputbottom1: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // contact No 1 CSS
    contactnoinputbottom1: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },

    // Store Person 2 CSS
    StorePersonNameinputbottom2: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // contact No 2
    contactnoinputbottom2: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },

    // Store Person 3 CSS
    StorePersonNameinputbottom3: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // contact No 3 CSS
    contactnoinputbottom3: {
        borderWidth: 1,
        color: '#7d7d7d',
        marginTop: 15,
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '35%',
        paddingBottom: 0,
        paddingLeft: 0,
    },
    // GPS Location CSS
    GPSinputbottom: {
        borderWidth: 1,
        color: '#7d7d7d',
        lineHeight: 10,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#bc9954',
        borderWidth: 0,
        width: '80%',
        paddingBottom: 0,
        paddingLeft: 0,
        alignSelf: 'center',
    },
    bottom: {
        width: 100,
        height: 5,
    },

    span: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 0,
    },

    submitButtonAlignment: {
        alignItems: 'center',
    },

    submitButton: {
        backgroundColor: '#eec06b',
        padding: 20,
        marginTop: 40,
        alignItems: 'center',
        borderRadius: 70,
        width: 240,
        height: 70,
        justifyContent: 'center',
    },

    submitButtonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
    },
});
