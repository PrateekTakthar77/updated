import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import { AuthContext } from '../Screens/AuthContext';

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper"
// import { TouchableOpacity } from 'react-native-gesture-handler'
const DrawerContent = (props, { navigation }) => {


    const { logout, userInfo } = useContext(AuthContext);

    return (
        <View style={{ flex: 1, backgroundColor: "#eec06b" }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.ProfileName}>
                            <View >
                                <Avatar.Image
                                    source={require("../assets/dp.jpg")} size={100}
                                />
                            </View>

                            <View style={styles.nameProfile}>
<<<<<<< HEAD
                                <Text style={{ marginTop: 5, fontWeight: "500", textAlign: "center", fontSize: 30 }}>{user?.name}</Text>
=======
                                <Text style={{ marginTop: 5, fontWeight: "500", textAlign: "center", fontSize: 30 }}>{userInfo?.name}</Text>

>>>>>>> a00b51837ec67342ad0d254247438a4e3ba80891
                            </View>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.bottomDrawerSection}>

                    <DrawerItem
                        // ion={({ color, size }) => (
                        //     <Icon name="profile" color={color} size={size} />
                        // )}
                        // label={() => (<Text style={{ color: 'white', fontSize: 20 }}>Start Motor</Text>)}
                        // label={<Text style={{color: '#ffffff'}}>First Item</Text>}
                        label="View Profile"
                        labelStyle={{ color: 'black', fontSize: 18, textAlign: "center", marginLeft: 27 }}
                        onPress={() => {
                            props.navigation.navigate("viewprofile");
                        }}
                        style={styles.ViewProfile}
                    />

                    <View style={styles.line}></View>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="storefront-outline" color={color} size={size} />
                        )}
                        label="Our Products"
                        onPress={() => {
                            props.navigation.navigate("ourproduct");
                        }}
                        style={styles.OurProduct}
                    />

                    <View style={styles.line}></View>

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="book" color={color} size={size} />
                        )}
                        label="Manage Order"
                        onPress={() => {
                            props.navigation.navigate("manageorder");
                        }}
                    />
                    <View style={styles.line}></View>

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="storefront-outline" color={color} size={size} />
                        )}
                        label="Wastage Chart"
                        onPress={() => {
                            props.navigation.navigate("pricelist");
                        }}
                    />

                    <View style={styles.line}></View>

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="book" color={color} size={size} />
                        )}
                        label="About Us"
                        onPress={() => {
                            props.navigation.navigate("goldscreen");
                        }}
                    />

                    <View style={styles.line}></View>

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="storefront-outline" color={color} size={size} />
                        )}
                        label="Privacy Policy"
                        onPress={() => {
                            props.navigation.navigate("silverscreen");
                        }}
                    />

                    <View style={styles.line}></View>

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="codepen" color={color} size={size} />
                        )}
                        label="Terms & Conditions"
                        onPress={() => {
                            props.navigation.navigate("tnc");
                        }}
                    />

                    <View style={styles.line}></View>

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="book" color={color} size={size} />
                        )}

                        label="Service Available"
                        onPress={() => {
                            props.navigation.navigate("StatesDropDown");
                        }}
                    />

                    <View style={styles.line}></View>
                </Drawer.Section>
                <View style={styles.Align2}>
                    <Image source={require("../assets/facebook.png")} style={styles.ImageIconsSize} />
                    <Image source={require("../assets/instagram2.png")} style={styles.ImageIconsSize} />
                    <Image source={require("../assets/whatsapp2.png")} style={styles.ImageIconsSize} />
                    <Image source={require("../assets/twitter.png")} style={styles.ImageIconsSize} />
                </View>

                <View style={{ alignSelf: "center", marginBottom: 20 }}>
                    <TouchableOpacity onPress={logout}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;


const styles = StyleSheet.create({
    ProfileName: {
        alignItems: "center",
        marginTop: 40,
        marginRight: 27,
    },
    nameProfile: {
        alignItems: "center",
    },
    drawerContent: {
        flex: 0.,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    Caption: {
        fontSize: 14,
        // lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginTop: 20,
        marginBottom: 15,
        // borderTopColor: "#f4f4fe",
        // borderTopWidth: 1
        // backgroundColor: "green",
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    line: {
        width: "100%",
        height: 2,
        backgroundColor: "white",
        alignSelf: 'center',
        marginBottom: 15,
    },
    OurProduct: {
        marginTop: 3,
        fontSize: "bold"
    },
    Align2: {
        flexDirection: "row",
        marginVertical: 40,
        marginHorizontal: 25,
        alignSelf: "center"
    },
    ImageIconsSize: {
        width: 40,
        height: 40,
        resizeMode: "cover",
        borderRadius: 40,
        marginLeft: 10,
        backgroundColor: "white",
        tintColor: '#eec06b'
    },
    logoutText: {
        fontWeight: "bold",
        fontSize: 25,
        // marginRight: 35,
        color: "black",
        // backgroundColor: "black",
        padding: 5,
        borderRadius: 10
    },
    ViewProfile: {
        // marginLeft: ,
        fontSize: 12,
        textAlign: "center"
    }
})





// 8765678760