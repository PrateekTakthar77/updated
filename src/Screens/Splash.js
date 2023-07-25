import React, { useEffect, useState } from 'react';
import { Animated, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/logo.png';
import gif from '../assets/logo-animation.gif';
import mp4 from '../assets/logo-animation.mp4';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('getstarted');
        }, 200);
    }, []);

    return (
        <SafeAreaView style={styles.background}>
            <Animated.View>
                <ImageBackground style={styles.image} source={gif} />
            </Animated.View>
        </SafeAreaView>
    );
};

export default Splash;

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        alignSelf: 'center',
        width: 380,
        height: 400,
    },
});
