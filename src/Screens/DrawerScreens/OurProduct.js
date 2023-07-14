import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import { setActiveItem } from '../redux/action';
import { StyleSheet } from 'react-native';
// import { moderateScale } from '../utils/responsive';
import { moderateScale } from '../../utils/responsive';



const OurProduct = () => {
  return (
    <View>
      <FlatList contentContainerStyle={{ alignItems: "center" }}
        // data={data}
        numColumns={2}
        renderItem={({ item, index }) => <View key={index} style={styles.View1}>
          <TouchableOpacity style={styles.View2}>
            <View style={styles.View3}>
              <Image style={styles.View4} />
              <Text style={styles.View5}>Rings</Text>
            </View>
          </TouchableOpacity>
        </View>}
      />
    </View>
  )
}

export default OurProduct;
const styles = StyleSheet.create({
  View1: {
    margin: moderateScale(10),
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    justifyContent: 'center',
    // marginRight:moderateScale(30),
    marginHorizontal: moderateScale(20)
  },
  View2: {
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    marginRight: moderateScale(10),
    borderRadius: 50
  },
  View3: {
    // backgroundColor: 'black',
    borderRadius: 35
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
    borderBottomRightRadius: 50
  }
})