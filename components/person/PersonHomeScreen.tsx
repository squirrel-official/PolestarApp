import React, { useState, useRef } from 'react';
import { Button, SafeAreaView, ScrollView, View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import axios from 'axios';
import styles from '../../assets/styles/styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const PersonHomeScreen = () => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [headingText, setHeadingText] = useState('Detected Car Number');
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef(null);

  const recognizeFaceFromImage = async (imagePath) => {
    try {
      const result = await TextRecognition.recognize(imagePath);
    } catch (error) {
      console.error('Error recognizing text:', error);
      Alert.alert('Error', 'Failed to recognize text from image.');
    }
  };

  const saveAndReadPhoto = async () => {
    try {
      const permissionStatusIOS = await check(PERMISSIONS.IOS.CAMERA);
      const permissionStatusAndroid = await check(PERMISSIONS.ANDROID.CAMERA);
      if (permissionStatusIOS !== RESULTS.GRANTED && permissionStatusAndroid !== RESULTS.GRANTED) {
        const requestPermissionIOS = await request(PERMISSIONS.IOS.CAMERA);
        const requestPermissionAndroid = await request(PERMISSIONS.ANDROID.CAMERA);
        if (requestPermissionIOS !== RESULTS.GRANTED && requestPermissionAndroid !== RESULTS.GRANTED) {
          Alert.alert(
            'Permission Required',
            'Please grant camera permission to use this feature.',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
          );
          return;
        }
      }

      if (cameraRef.current) {
        const options = { quality: 1.0, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        recognizeFaceFromImage(data.uri);
      }
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  };



  const pickImageFromGallery = async () => {
    const options = {
      mediaType: 'photo',
    };

    try {
      const response = await new Promise((resolve, reject) => {
        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
            reject('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
            reject(response.errorMessage);
          } else {
            resolve(response);
          }
        });
      });

      if (response.assets && response.assets.length > 0) {
        const { uri } = response.assets[0];
        recognizeFaceFromImage(uri);
      } else {
        console.log('No image selected');
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <RNCamera
            ref={cameraRef}
            style={styles.camera}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            onCameraReady={() => setIsCameraReady(true)}
          >
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.galleryButton} onPress={pickImageFromGallery}>
                <Fontisto name="picture" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.captureButton} onPress={saveAndReadPhoto}>
                <Fontisto name="camera" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </RNCamera>

          <View style={styles.detectedTextContainer}>
            <Text style={styles.detectedText}>{recognizedText}</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PersonHomeScreen;
