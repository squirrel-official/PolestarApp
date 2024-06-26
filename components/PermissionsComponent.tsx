import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const PermissionsComponent: React.FC = () => {
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    try {
      await requestPermission(PERMISSIONS.IOS.CAMERA, 'Camera');
      await requestPermission(PERMISSIONS.IOS.PHOTO_LIBRARY, 'Photo Library');
      await requestPermission(PERMISSIONS.IOS.MICROPHONE, 'Microphone');
    } catch (error) {
      console.error('Error requesting permissions:', error);
    }
  };

  const requestPermission = async (permission: string, name: string) => {
    const status = await check(permission);
    if (status !== RESULTS.GRANTED) {
      const result = await request(permission);
      if (result !== RESULTS.GRANTED) {
        Alert.alert(`${name} Permission`, `Please grant ${name} permission to use this feature.`);
      }
    }
  };

  return null; // This component doesn't render anything visible
};

export default PermissionsComponent;
