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
  