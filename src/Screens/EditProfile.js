import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    PermissionsAndroid,
    // AsyncStorage,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const EditProfile = () => {
    const [cameraPhoto, setCamerPhoto] = useState();
    const [galleryPhoto, setGalleryPhoto] = useState();

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    };
    const camera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options);
            setCamerPhoto(result.assets[0].uri);
        }
    };

    const gallery = async () => {
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri);
    };
    const saveCameraPhotoToStorage = async () => {
        try {
            await AsyncStorage.setItem('cameraPhoto', cameraPhoto);
            console.log('Camera photo saved to AsyncStorage');
        } catch (error) {
            console.log('Error saving camera photo to AsyncStorage:', error);
        }
    };
    const saveGalleryPhotoToStorage = async () => {
        try {
            await AsyncStorage.setItem('galleryPhoto', galleryPhoto);
            console.log('Gallery photo saved to AsyncStorage');
        } catch (error) {
            console.log('Error saving gallery photo to AsyncStorage:', error);
        }
    };

    useEffect(() => {
        // Load camera photo from AsyncStorage when the component mounts
        const loadCameraPhotoFromStorage = async () => {
            try {
                const savedCameraPhoto = await AsyncStorage.getItem('cameraPhoto');
                if (savedCameraPhoto) {
                    setCameraPhoto(savedCameraPhoto);
                }
            } catch (error) {
                console.error('Error loading camera photo from AsyncStorage:', error);
            }
        };

        // Load gallery photo from AsyncStorage when the component mounts
        const loadGalleryPhotoFromStorage = async () => {
            try {
                const savedGalleryPhoto = await AsyncStorage.getItem('galleryPhoto');
                if (savedGalleryPhoto) {
                    setGalleryPhoto(savedGalleryPhoto);
                }
            } catch (error) {
                console.error('Error loading gallery photo from AsyncStorage:', error);
            }
        };

        loadCameraPhotoFromStorage();
        loadGalleryPhotoFromStorage();
    }, []);

    return (
        <View>
            <Image
                source={{ uri: galleryPhoto }}
                style={{ width: 140, height: 140, borderRadius: 100, marginTop: 20 }}
            />
            <Image
                source={{ uri: cameraPhoto }}
                style={{ width: 140, height: 140, borderRadius: 100, marginTop: 20 }}
            />
            <TouchableOpacity
                onPress={() => {
                    camera();
                    saveCameraPhotoToStorage();
                }}
            >
                <View
                    style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
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
                        Take Image
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    gallery();
                    saveGalleryPhotoToStorage();
                }}
            >
                <View
                    style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
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
                        Select Image from Gallery
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View
                    style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
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
                            textAlign: 'center',
                            justifyContent: 'flex-start',
                        }}
                    >
                        Cancel
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default EditProfile;

const styles = StyleSheet.create({});
