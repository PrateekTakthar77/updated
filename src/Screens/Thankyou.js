import React, { useEffect, useState } from 'react'
import { Animated, ImageBackground, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Logo from './src/assets/thank-you.png';
import Logo from '../assets/thank-you.png';

const Thankyou = () => {

  return (
    <SafeAreaView style={styles.background} >
      <Animated.View>
        <ImageBackground style={styles.image} source={Logo} />
      </Animated.View>
    </SafeAreaView>
  )
}

export default Thankyou;

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ""
  },
  image: {
    width: 200,
    height: 200,
  }
})