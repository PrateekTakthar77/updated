import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    ImageBackgroundComponent,
} from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { fillDetails } from './FormDetails/fillDetails/FormDetails.action-creator';
import Navigation from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';
const ViewProfile = ({ navigation }) => {
    const {
        login,
        logout,
        isLoading,
        userToken,
        userInfo,
        register,
        userDetails,
        updateUserDetails,
        getUserDetails,
    } = useContext(AuthContext);

    // const { payload: user } = userInfo;
    // console.log(fillDetails.toString);

    return (
        <View style={{ backgroundColor: '#eec06b' }}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('editprofile')}>
                        <Image
                            source={require('../assets/dp.jpg')}
                            style={{
                                width: 140,
                                height: 140,
                                borderRadius: 100,
                                marginTop: 20,
                            }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 25,
                            marginTop: 20,
                            fontWeight: 'bold',
                            color: 'black',
                        }}
                    ></Text>
                </View>

                {/* -------------- */}
                <View
                    style={{
                        borderWidth: 2,
                        backgroundColor: '#696969',
                        borderRadius: 20,
                        width: '99%',
                        marginBottom: 20,
                        alignSelf: 'center',
                        marginTop: 15,
                    }}
                >
                    <View
                        style={{
                            // alignSelf: "center",
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            // backgroundColor: "black",
                            width: '50%',
                            padding: 10,
                            // paddingBottom: 0,
                            // shadowOpacity: 80,
                            // elevation: 15,
                            // marginTop: 0,
                            // borderWidth: 1,
                            // borderColor: "black",
                            // borderRadius: 10,
                            marginLeft: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'white',
                                color: '#eec06b',
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            Personal Information
                        </Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 10,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Name :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>

                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Mobile No. :
                        </Text>
                        {/* <Text style={{ fontSize: 15, }}></Text> */}
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                            marginBottom: 30,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Email :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>
                </View>

                {/* -------------- -------------------------------------------------- */}

                <View
                    style={{
                        borderWidth: 2,
                        backgroundColor: '#696969',
                        borderRadius: 20,
                        width: '99%',
                        marginBottom: 20,
                        alignSelf: 'center',
                        marginTop: 15,
                    }}
                >
                    <View
                        style={{
                            // alignSelf: "center",
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            // backgroundColor: "black",
                            width: '50%',
                            padding: 10,
                            paddingBottom: 10,
                            // shadowOpacity: 80,
                            // elevation: 15,
                            marginTop: 20,
                            // borderWidth: 1,
                            // borderColor: "black",
                            // borderRadius: 10,
                            marginLeft: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'white',
                                color: '#eec06b',
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            Business Details
                        </Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 10,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Brand name :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>

                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Address :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Pincode :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Locality :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            City :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            State :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Store person name :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: "center",
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 10,
                            paddingBottom: 10,
                            shadowOpacity: 80,
                            elevation: 15,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                            marginBottom: 40,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Store contact no :
                        </Text>
                        <Text style={{ fontSize: 15 }}></Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ViewProfile;
