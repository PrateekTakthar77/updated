import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { singleProductAction } from './single-product.action';
// import { SliderBox } from "react-native-image-slider-box";

const images = [
    require('../assets/logo.png'),
    require('../assets/logo.png'),
    require('../assets/logo.png'),
];

const SingleProduct = ({ navigation }) => {
    const dispatch = useDispatch();
    const { activeItem } = useSelector((state) => state.reducer);

    const handlePress = async (activeItem) => {
        await singleProductAction(activeItem, dispatch);
        navigation.navigate('cart');
    };

    return (
        <View>
            <ScrollView>
                <View style={styles.View1}>
                    {/* <SliderBox
                        images={images}
                        sliderBoxHeight={300}
                        dotColor="#eec06b"
                        inactiveDotColor="black"
                        autoplay={true}
                        autoplayInterval={1000}
                        circleLoop={true} /> */}
                    <Image
                        style={{
                            height: 250,
                            width: 350,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            borderRadius: 15,
                        }}
                        source={{ uri: activeItem.images[0] }}
                    />
                </View>
                <View style={styles.View2}>
                    <Text style={styles.View3}>Name {activeItem.name}</Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.View3}>
                        Size-{activeItem.size} Weight-{activeItem.weight}g
                    </Text>
                </View>

                <View style={styles.View2}>
                    <Text style={styles.View3}>{cartItem.item.name}</Text>
                </View>
                {/* <View style={styles.View5}>
                    <Text style={styles.View60}>Ratings</Text>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Text style={styles.View6}>⭐</Text>
                        <Text style={styles.View6}>⭐</Text>
                        <Text style={styles.View6}>⭐</Text>
                        <Text style={styles.View6}>⭐</Text>
                        <Text style={styles.View6}>⭐</Text>
                    </TouchableOpacity>
                    <Text style={styles.View60}>4.5</Text>
                </View> */}
                <TouchableOpacity onPress={() => handlePress(activeItem)}>
                    <View style={styles.loginbutton}>
                        <Text style={styles.logintext}>ADD TO CART</Text>
                    </View>
                </TouchableOpacity>
                {/* <View style={styles.View7}>
                    <Text style={styles.View6}>Product specification</Text>
                    <Text style={styles.View6}>↓</Text>
                </View> */}
            </ScrollView>
        </View>
    );
};

export default SingleProduct;

const styles = StyleSheet.create({
    loginbutton: {
        backgroundColor: '#eec06b',
        padding: 15,
        marginTop: 20,
        borderRadius: 80,
        width: 190,
        height: 60,
        justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        // marginLeft: 75,
    },
    logintext: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    View1: {
        height: 300,
        // width: 200,
        marginTop: 30,
        // justifyContent: 'center',
        // padding:0,
    },
    View2: {
        marginTop: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#eec06b',
        padding: 20,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    View3: {
        color: 'black',
        fontWeight: 'bold',
        // justifyContent:'space-evenly'
    },
    View4: {
        color: 'black',
        // backgroundColor: 'black',
        padding: 1,
        fontWeight: 'bold',
    },
    View5: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        padding: 20,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 10,
    },
    View6: {
        color: 'black',
    },
    View60: {
        color: '#eec06b',
    },
    View7: {
        borderTopWidth: 1,
        borderTopColor: '#808080',
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginRight: 20,
        marginLeft: 20,
    },
});
