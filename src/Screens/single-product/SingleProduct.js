import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProductActionCreator } from './single-product.action-creator';

const images = [
    require('../../assets/logo.png'),
    require('../../assets/logo.png'),
    require('../../assets/logo.png'),
];

const SingleProduct = ({ navigation, route }) => {
    const { productId } = route.params;
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);

    if (!productId) {
        return <></>;
    }

    useEffect(() => {
        getSingleProductActionCreator(productId, dispatch);
    }, [productId]);

    const handlePress = () => {
        // Server API HIT
        navigation.navigate('cart');
    };

    return (
        <View>
            <ScrollView>
                <View style={styles.View1}>
                    <Image
                        style={{
                            height: 250,
                            width: 350,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            borderRadius: 15,
                            marginBottom: 2,
                        }}
                        source={{ uri: product?.images?.[0] }}
                    />
                </View>

                <View style={styles.alignmentMento}>
                    <Text style={styles.View3}>Name {product.name}</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.View33}>Weight-{product.weight} g</Text>
                </View>
                {/* <View style={styles.View2}>
                    <Text style={styles.View3}>Size-</Text>
                    <TouchableOpacity>
                        <Text style={styles.View4}>2.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.View3}>3.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.View3} >3.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.View3}>4.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.View3}>4.5</Text>
                    </TouchableOpacity>
                </View> */}
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
                <TouchableOpacity onPress={() => handlePress(product)}>
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
        marginTop: 100,
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

    View22: {
        // width: 340,
        // marginTop: 30,

        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // backgroundColor: '#eec06b',
        // padding: 20,
        // marginRight: 20,
        // marginLeft: 20,
        marginBottom: 20,
        // borderRadius: 10,
    },
    alignmentMento: {
        alignSelf: 'center',
        // alignItems: 'center',
        backgroundColor: '#eec06b',
        width: 340,
        height: 150,
        marginTop: -20,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'center',
    },
    line: {
        width: '100%',
        height: 1.5,
        backgroundColor: 'black',
        alignSelf: 'center',
        // marginBottom: 15,
    },
    View3: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
        paddingBottom: 20,
    },
    View33: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
        paddingTop: 20,
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
