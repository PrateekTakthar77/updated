import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import { setActiveItem } from '../redux/action';
import { StyleSheet } from 'react-native';

// TODO: GET THE PRODUCTS FROM STORE
const Product = ({ navigation }) => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getAPIDATA = async () => {
        // const url = "https://jwell-bliss-test-dev.cyclic.app/api/products/";
        const url = "https://jwells-bliss-deploy2.up.railway.app/api/products/";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getAPIDATA();
    }, []);

    const handlePress = (item) => {
        dispatch(setActiveItem(item));
        navigation.navigate('singleproduct');
    };

    return (
        <View>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item, index }) => <View key={index} style={styles.View1}>
                    <TouchableOpacity onPress={() => handlePress(item)} style={styles.View2}>
                        <View style={styles.View3}>
                            <Image style={styles.View4} source={require('../assets/logo.png')} />
                            <Text style={styles.View5}>{item?.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>}
            />
        </View>

    )
}

export default Product

const styles = StyleSheet.create({
    View1: {
        margin: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        justifyContent: 'center'
    },
    View2: {
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
        marginRight: 20,
        borderRadius: 50
    },
    View3: {
        backgroundColor: 'black',
        borderRadius: 35
    },
    View4: {
        height: 150,
        width: 100,
        alignSelf: 'center',
        borderRadius: 50
    },
    View5: {
        width: 150,
        color: 'white',
        backgroundColor: '#ECC440',
        textAlign: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    }
})