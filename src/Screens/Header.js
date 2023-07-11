import { Dimensions, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get("window")
const Headerr = ({ Search, leftIcon, onClickLeftIcon}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.btn} onPress={() => {
                onClickLeftIcon();
            }}>
                <Image source={leftIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Image source={Search} style={styles.lens} />
            </TouchableOpacity>
        </View>
    )
}

export default Headerr

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "15",
        paddingRight: "15",
    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        marginLeft: 20,
        marginTop: 8,
        width: 30,
        height: 30,
        tintColor: "#eec06b"
    },
    lens: {
        marginRight: 25,
        marginTop: 18,
        width: 30,
        height: 30,
        tintColor: "#eec06b"
    }
})