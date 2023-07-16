// import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackgroundComponent } from 'react-native'
// import React from 'react'

// const ViewProfile = () => {
//     return (
//         <View style={{ backgroundColor: "#eec06b" }}>
//             <ScrollView>
//                 <View style={{ alignItems: "center" }}>
//                     <Image source={require("../assets/dp.jpg")} style={{ width: 140, height: 140, borderRadius: 100, marginTop: 40 }} />
//                     <Text style={{ fontSize: 25, marginTop: 40, fontWeight: "bold" ,  color: "#eec06b"}}>HEllo</Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "black",
//                     width: "50%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,

//                 }}>
//                     <Text style={{ fontSize: 20, color: "white",  color: "#eec06b"}}>Personal Information</Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "white",
//                     width: "90%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,
//                 }}>
//                     <Text style={{ fontSize: 15, }}>Brand Name : </Text>
//                     <Text style={{ fontSize: 15, }}></Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "white",
//                     width: "90%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,
//                 }}>

//                     <Text style={{ fontSize: 15, }}>Address : </Text>
//                     <Text style={{ fontSize: 15, }}></Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "white",
//                     width: "90%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,
//                 }}>


//                     <Text style={{ fontSize: 15, }}>PinCode : </Text>
//                     <Text style={{ fontSize: 15, }}></Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "white",
//                     width: "90%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,
//                 }}>
//                     <Text style={{ fontSize: 15, }}>Locality : </Text>
//                     <Text style={{ fontSize: 15, }}></Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "white",
//                     width: "90%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,
//                 }}>
//                     <Text style={{ fontSize: 15, }}>City : </Text>
//                     <Text style={{ fontSize: 15, }}></Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "white",
//                     width: "90%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,
//                 }}>
//                     <Text style={{ fontSize: 15, }}>State : </Text>
//                     <Text style={{ fontSize: 15, }}></Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "white",
//                     width: "90%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,
//                 }}>
//                     <Text style={{ fontSize: 15, }}>Store Person Name : </Text>
//                     <Text style={{ fontSize: 15, }}></Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "white",
//                     width: "90%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,
//                 }}>
//                     <Text style={{ fontSize: 15, }}>Contact No : </Text>
//                     <Text style={{ fontSize: 15, }}></Text>
//                 </View>
//                 <View style={{
//                     alignSelf: "center",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     backgroundColor: "white",
//                     width: "90%",
//                     padding: 10,
//                     paddingBottom: 10,
//                     shadowOpacity: 80,
//                     elevation: 15,
//                     marginTop: 20,
//                     borderWidth: 1,
//                     borderColor: "black",
//                     borderRadius: 10,
//                     marginBottom: 40
//                 }}>
//                     <Text style={{ fontSize: 15, }}>GPS Location : </Text>
//                     <Text style={{ fontSize: 15, }}></Text>
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

// export default ViewProfile

import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackgroundComponent } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

const ViewProfile = () => {

    const { userInfo, userDetails } = useContext(AuthContext);

    console.log("userInfo", userInfo);

    // const { payload: user } = userInfo;

    // console.log(`userinfo`, userInfo);
    // console.log(`userdetails from profile screen *****`, userDetails.mobile);
    // console.log(`user from view p ((@))`, user)
    // console.log(`userdetails from tnc screen ((@))`, .)

    return (
        <View style={{ backgroundColor: "#eec06b" }}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../assets/dp.jpg")} style={{ width: 140, height: 140, borderRadius: 100, marginTop: 20 }} />
                    <Text style={{ fontSize: 25, marginTop: 20, fontWeight: "bold", color: "black" }}>{userInfo?.name}</Text>
                </View>

                {/* -------------- */}
                <View style={{ borderWidth: 2, backgroundColor: '#696969', borderRadius: 20, width: '99%', marginBottom: 20, alignSelf: 'center', marginTop: 15 }}>
                    <View style={{
                        // alignSelf: "center",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        // backgroundColor: "black",
                        width: "50%",
                        padding: 10,
                        // paddingBottom: 0,
                        // shadowOpacity: 80,
                        // elevation: 15,
                        // marginTop: 0,
                        // borderWidth: 1,
                        // borderColor: "black",
                        // borderRadius: 10,
                        marginLeft: 20,

                    }}>
                        <Text style={{ fontSize: 20, color: "white", color: "#eec06b", fontSize: 20, fontWeight: 600 }}>Personal Information</Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 10,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,

                    }}>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Name : {userInfo?.name}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>



                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>

                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Mobile No. : {userDetails?.mobile}</Text>
                        {/* <Text style={{ fontSize: 15, }}></Text> */}
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        marginBottom: 30,
                    }}>


                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Email : {userInfo?.email}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>

                </View>




                {/* -------------- -------------------------------------------------- */}



                <View style={{ borderWidth: 2, backgroundColor: '#696969', borderRadius: 20, width: '99%', marginBottom: 20, alignSelf: 'center', marginTop: 15 }}>
                    <View style={{
                        // alignSelf: "center",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        // backgroundColor: "black",
                        width: "50%",
                        padding: 10,
                        paddingBottom: 10,
                        // shadowOpacity: 80,
                        // elevation: 15,
                        marginTop: 20,
                        // borderWidth: 1,
                        // borderColor: "black",
                        // borderRadius: 10,
                        marginLeft: 20,

                    }}>
                        <Text style={{ fontSize: 20, color: "white", color: "#eec06b", fontSize: 20, fontWeight: 600 }}>Business Details</Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 10,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,

                    }}>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Brand name :{userDetails.brandName}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>



                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>

                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Address : {userDetails.address}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>


                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Pincode :{userDetails.pincode}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Locality : {userDetails.locality}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>City : {userDetails.city}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>State : {userDetails.state}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Store person name : {userDetails.storePersonName}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: 10,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        marginBottom: 40
                    }}>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Store contact no : {userDetails.contactNo}</Text>
                        <Text style={{ fontSize: 15, }}></Text>
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}

export default ViewProfile