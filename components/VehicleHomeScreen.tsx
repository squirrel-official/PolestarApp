import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import PermissionsComponent from './PermissionsComponent';

const VehicleHomeScreen = () => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');


  const recognizeTextFromImage = async (imagePath: string) => {
    // Placeholder for text recognition logic
    // Replace with actual implementation using OCR library
    setRecognizedText('Recognizing text...');
  };

  const takePicture = async (camera: any) => {
    try {
      // Check permission before attempting to take a picture
      const permissionStatus = await check(PERMISSIONS.IOS.CAMERA);
      Alert.alert(permissionStatus)
      if (permissionStatus !== RESULTS.GRANTED) {
        const requestPermission = await request(PERMISSIONS.IOS.CAMERA);
        if (requestPermission !== RESULTS.GRANTED) {
          Alert.alert(
            'Permission Required',
            'Please grant camera permission to use this feature.',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
          );
          return;
        }
      }else{
        Alert.alert(permissionStatus)
      }

      // Take picture if permission is granted
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      recognizeTextFromImage(data.uri); // Pass captured image URI for text recognition
    } catch (error) {
      console.error('Error taking picture:', error);
      // Handle errors gracefully (e.g., show error message)
    }
  };

  return (
    <View style={styles.container}>
      {/* <PermissionsComponent /> */}
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
        onCameraReady={() => setIsCameraReady(true)}
      >
        {({ camera, status }) => {
          if (status !== 'READY') return <View />;
          return (
            <TouchableOpacity style={styles.captureButton} onPress={() => takePicture(camera)}>
              <Text style={styles.captureButtonText}>Take Picture</Text>
            </TouchableOpacity>
          );
        }}
      </RNCamera>
      <View style={styles.detectedTextContainer}>
        <Text style={styles.detectedText}>{recognizedText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  captureButton: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  captureButtonText: {
    fontSize: 16,
    color: 'black',
  },
  detectedTextContainer: {
    position: 'absolute',
    bottom: 120,
    width: '100%',
    alignItems: 'center',
  },
  detectedText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default VehicleHomeScreen;
