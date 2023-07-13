import { View, Text, Image, TouchableOpacity, TextInput, Button, ScrollView, StyleSheet, Modal } from "react-native";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from "../redux/action";
import { addToCart, removeFromCart } from "../redux/action";

const Cart = () => {
    const [showModal, setShowModal] = useState(false);
    const { cart, cartDetails } = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
    const { total, grandTotal } = cartDetails;
    // console.log(item);

    const Navigator = () => {
        setShowModal(true);
    }

    const increaseCount = (item) => {
        dispatch(addToCart(item));
    }

    const decreaseCount = (item) => {
        dispatch(removeFromCart(item));
    }

    // console.log('cartDetails-->',cartItem.item);
    return (
        <View>
            <ScrollView>
                {
                    cart.length ? cart.map(cartItem => (
                        <View key={cartItem.id} style={styles.View1} >

                            <View style={styles.View2}>

                                <Image style={styles.View3}  source={{ uri: cartItem.item.images[0] }}/>

                                <View style={styles.alignment}>
                                    <Text style={styles.View4}>{cartItem.item.name}</Text>

                                    <Text style={styles.View5}>RS. {cartItem.item.price}</Text>

                                    <View style={styles.View6}>

                                        <View style={styles.View7}>
                                            <TouchableOpacity style={styles.View8} onPress={() => increaseCount(cartItem.item)}>
                                                <Text style={styles.View9}> +    </Text>
                                            </TouchableOpacity>

                                            <Text style={styles.View9}>{cartItem.count} </Text>

                                            <TouchableOpacity style={styles.View8} onPress={() => decreaseCount(cartItem.item)}>
                                                <Text style={styles.View9}>      - </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )) : <></>
                }
                <View style={styles.View10}>

                    <View style={styles.TotalAlignment}>
                        <View style={styles.TotalPaddingAlignment}>
                            <Text style={styles.TotalSubChildAlignment}>Item total</Text>
                            <Text style={styles.TotalSubChildAlignment}>CGST(1.5%)</Text>
                            <Text style={styles.TotalSubChildAlignment}>SGST(1.5%)</Text>
                            <Text style={styles.TotalSubChildAlignment}>Discount</Text>
                            <Text style={styles.TotalSubChildAlignment10}>Grand Total</Text>
                        </View>
                        <View style={styles.TotalPaddingAlignment}>
                            <Text style={styles.TotalSubChildAlignment2}>{total}</Text>
                            <Text style={styles.TotalSubChildAlignment2}>435.00</Text>
                            <Text style={styles.TotalSubChildAlignment2}>435.00</Text>
                            <Text style={styles.TotalSubChildAlignment2}>1000.00</Text>
                            <Text style={styles.TotalSubChildAlignment20}>{grandTotal}</Text>
                        </View>
                    </View>

                    <View style={styles.line}></View>

                    {/* <View style={styles.View13}>
                        <View style={styles.View30}>
                            <TextInput placeholder="Enter Discount Coupon " style={styles.View14} placeholderTextColor={'#eec06b'} />
                            <TouchableOpacity >
                                <Text style={styles.View15}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                        <TouchableOpacity onPress={Navigator}><Text style={{ backgroundColor: "#eec06b", padding: 10, borderRadius: 20, marginRight: 5, fontWeight: '700', color: 'black', width: '100%' }}>CONTINUE SHOPPING</Text></TouchableOpacity>
                        <TouchableOpacity onPress={Navigator}><Text style={{ backgroundColor: "#eec06b", padding: 10, borderRadius: 20, marginLeft: 5, fontWeight: '700', color: 'black', width: '100%' }}>PROCEED TO PAY</Text></TouchableOpacity>
                    </View>

                    {/* <View style={styles.View16}>
                        <View style={styles.Button}>
                            <TouchableOpacity style={styles.Buttons} onPress={Navigator}>
                                <Text style={styles.View17}>CONTINUE SHOPPING</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.Button}>
                            <TouchableOpacity style={styles.Buttons} onPress={Navigator}>
                                <Text style={styles.View17}></Text>
                            </TouchableOpacity>
                        </View>



                    </View> */}

                </View>

            </ScrollView>


            <Modal Modal visible={showModal} animationType="slide" onRequestClose={() => setShowModal(false)} >

                <View style={styles.View18}>

                    <View style={styles.View19}>

                        <Text style={styles.View20}>Advance Payment</Text>
                        <View>
                            <Text style={styles.View21}>Advance Payment 28900.00</Text>
                        </View>

                        {/* <TouchableOpacity style={styles.View22}>

                            <View style={styles.MOdalloginbutton}>
                                <Text style={styles.MOdallogintext}>ENTER ADVANCE AMOUNT</Text>
                            </View>

                        </TouchableOpacity> */}


                        <View style={styles.View23}>

                            <TextInput placeholder="ENTER ADVANCE PAYMENT AMOUNT" style={styles.View24} placeholderTextColor={'#eec06b'} />
                        </View>

                        <Text style={styles.View25}>Select Payment option</Text>

                        <TouchableOpacity style={styles.View26} >
                            <View style={styles.signupbutton}>
                                <Text style={styles.signuptext}>PROCEED TO PAY</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Cart


const styles = StyleSheet.create({
    signupbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
    },
    signuptext: {
        fontSize: 20,
        color: "#eec06b",
    },
    MOdalloginbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 10,
        width: 270,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
    },
    MOdallogintext: {
        fontSize: 15,
        color: "#eec06b",
    },
    View1: {
        flexDirection: 'row',
        backgroundColor: '#eec06b',
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30
    },
    View2: {
        flexDirection: 'row',
    },
    View3: {
        height: 130,
        width: 200,
        backgroundColor: 'black',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    alignment: {
        flexDirection: "colomn",
        // alignItems:"center",
    },
    View4: {
        marginTop: 9,
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    View5: {
        color: 'black',
        marginBottom: 27,
        marginLeft: 10
    },
    View6: {
        flexDirection: 'row',
        width: 50,
        marginLeft: 130,
    },
    View7: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -120,
    },
    View8: {
        marginRight: 5
    },
    View9: {
        color: 'white'
    },
    View10: {
        flexDirection: 'column',
        margin: 50
    },
    View11: {
        marginBottom: 10
    },
    View12: {
        fontWeight: 'bold',
        color: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 5
    },
    View13:
    {
        backgroundColor: 'black',
        marginTop: 25,
        // flexDirection: "row",
        // justifyContent: 'center',
        borderRadius: 60,
    },
    View30: {
        flexDirection: "row",
    },
    View14: {
        // backgroundColor: 'black',
        padding: 10,
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,
        width: "80%",
        color: 'white'
    },
    View15: {
        backgroundColor: '#eec06b',
        fontWeight: '700',
        color: 'black',
        borderRadius: 5,
        height: 30,
        marginLeft: -10,
        // marginHorizontal:1,
    },
    View16: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -10,
    },
    Button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Buttons: {
        width: 200,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View17: {
        backgroundColor: "#eec06b",
        padding: 10,
        borderRadius: 20,
        // marginRight: 5,
        fontWeight: '700',
        color: 'black',
        // width: '100%'
        width: 140,
        padding: 10,
        borderWidth: 2
    },
    View18: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    View19: {
        backgroundColor: "#eec06b",
        padding: 50,
        borderRadius: 40,
        width: 350
    },
    View20: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000',
        marginBottom: -10,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    View21: {
        marginTop: 20
    },
    View22: {
        alignItems: 'center',
        marginLeft: -60
    },
    View23: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 20
    },
    View24: {
        backgroundColor: 'black',
        padding: 10,
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,
        width: "100%",
        color: 'white'
    },
    View25: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    View26: {
        alignItems: 'center',
        marginLeft: -60
    },

    TotalAlignment: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -100,
    },
    TotalPaddingAlignment: {
        marginVertical: 5,

    },
    TotalSubChildAlignment: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
    },
    TotalSubChildAlignment2: {
        textAlign: 'right',
        fontSize: 14,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
    },
    TotalSubChildAlignment10: {
        fontWeight: "500",
        color: "black",
        marginVertical: 5,
        textAlign: 'right',
    },
    TotalSubChildAlignment20: {
        fontWeight: "500",
        color: "black",
        marginVertical: 5,
        textAlign: 'right',
        marginBottom: 25,
    },
    line: {
        width: "100%",
        height: 1.5,
        backgroundColor: "#a4a4a4",
        alignSelf: 'center'
    },
    body: {
        backgroundColor: "white",
    },
    logo: {
        marginTop: 150,
        marginLeft: 135,
        marginBottom: 150,
    },
    loginbutton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
    },
    signupbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
    },
    logintext: {
        fontSize: 20,
        color: "black",
    },
    signuptext: {
        fontSize: 20,
        color: "#eec06b",
    },
    MOdalloginbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 10,
        width: 270,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
    },
    MOdallogintext: {
        fontSize: 15,
        color: "#eec06b",
    },
    FinaleSubmit: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 20,
        borderRadius: 80,
        width: 190,
        height: 60,
        justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: "center"
        // marginLeft: 75,
    },
    FinaleSubmitText: {
        fontSize: 15,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
    }

})