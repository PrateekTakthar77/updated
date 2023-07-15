import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from '../../redux/action';
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/responsive';
import { getProductsActionCreator } from './products.action-creator';

const Product = ({ navigation }) => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        getProductsActionCreator(dispatch);
    }, []);

    const handlePress = (item) => {
        dispatch(setActiveItem(item));
        navigation.navigate('singleproduct', { productId: item.id });
    };

    return (
        <View>
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={products}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.View1}>
                        <TouchableOpacity
                            onPress={() => handlePress(item)}
                            style={styles.View2}
                        >
                            <View style={styles.View3}>
                                <Image
                                    style={styles.View4}
                                    source={{ uri: item.images[0] }}
                                />
                                <Text style={styles.View5}>{item?.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    View1: {
        margin: moderateScale(10),
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        justifyContent: 'center',
        // marginRight:moderateScale(30),
        marginHorizontal: moderateScale(20),
    },
    View2: {
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
        marginRight: moderateScale(10),
        borderRadius: 50,
    },
    View3: {
        // backgroundColor: 'black',
        borderRadius: 35,
    },
    View4: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        borderRadius: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // padding:5,
    },
    View5: {
        width: 150,
        color: 'black',
        padding: 5,
        // fontWeight:500,
        backgroundColor: '#ECC440',
        textAlign: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
});
