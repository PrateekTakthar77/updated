import React, { useState } from "react";
import { View, Text, Image, StatusBar, Button, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

function LogInSignUp({ navigation }) {
    const OpenSignup = () => {
        setShowModal(true);
    }
    const [showModal, setShowModal] = useState(false);
    return (
        <View>
            <View style={styles.body}>

                <View style={styles.image}>
                    <Image style={styles.imageSize} source={require('../assets/logo.png')} />
                </View>

                <View style={styles.ButtonContainer}>

                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <View style={styles.loginbutton}>
                            <Text style={styles.logintext}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={OpenSignup}>
                        <View style={styles.signupbutton}>
                            <Text style={styles.signuptext}>SIGNUP </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal Modal visible={showModal} animationType="slide" onRequestClose={() => setShowModal(false)} >
                <View style={styles.modalAlignMent}>
                    <View style={styles.modalStyle}>
                        <Text style={styles.modalSignUpText} >SIGN UP AS</Text>

                        <View style={styles.line}></View>

                        <TouchableOpacity style={styles.ModalLogInButtonAlignment} onPress={() => navigation.navigate('signup')}>
                            <View style={styles.Modalloginbutton}>
                                <Text style={styles.Modallogintext}>DEALER</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ModalSignUpButtonAlignment} onPress={() => navigation.navigate('signup')}>
                            <View style={styles.Modalsignupbutton}>
                                <Text style={styles.Modalsignuptext}>CUSTOMER</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default LogInSignUp;


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white",
    },

    image: {
        alignSelf: 'center'
    },

    imageSize: {
        marginTop: 20,
        width: 350,
        height: 350,
    },

    ButtonContainer: {
        alignSelf: 'center'
    },

    loginbutton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 480,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 60,
    },
    signupbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 590,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 60,
    },
    logintext: {
        fontSize: 20,
        color: "black",
    },
    signuptext: {
        fontSize: 20,
        color: "#eec06b",
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
    }
});
