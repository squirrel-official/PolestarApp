import { StyleSheet } from 'react-native';

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
    flipPanel: {
      position: "absolute",
      marginTop: "15%",
      right: "1%",
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    cameraPanel: {
      position: "absolute",
      bottom: 30,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      paddingHorizontal: 20,
    },
    flipButton: {
      backgroundColor: "transparent", // Remove background
      padding: 5,
      borderRadius: 20,
    },
    captureButtonText: {
      fontSize: 16,
      color: 'black',
    },
    textSearchButton: {
      position: "absolute",
      bottom: 30,
      left: 20,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 25,
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    zoomControl: {
      position: "absolute",
      bottom: 10,
      right: 10,
      alignItems: "flex-end",
      justifyContent: "flex-end",
      height: "70%",
      width: 40,
    },
    slider: {
      flex: 1,
      transform: [{ rotate: "270deg" }],
    },
    permissionsContainer: {
      flex: 1,
      marginTop: "25%",
      marginBottom: "25%",
    },
    detectedCarNumbersTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    detectedCarNumbersContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      padding: 0,
    },
    textInputContainer: {
      backgroundColor: "#F0F0F0",
      borderRadius: 5,
      marginRight: 10,
      marginBottom: 10,
    },
    textInput: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      fontSize: 16,
    },
    submitButton: {
      backgroundColor: "#33CC33", // Consider a green color
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginBottom: 20,
      flex: 1,
      marginLeft: 5,
    },
    cancelButton: {
      backgroundColor: "#FF0000",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginBottom: 20,
      flex: 1,
      marginRight: 5,
    },
    closeButton: {
      backgroundColor: "#e0db43",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginBottom: 20,
      flex: 1,
      marginRight: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
    },
    buttonGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    closeButtonText: {
      color: "black",
      fontSize: 16,
      fontWeight: "600",
    },
    cameraControls: {
      flexDirection: "row",
      justifyContent: "flex-end", // Align controls to the right
    },
    carNumberInput: {
      backgroundColor: "#F0F0F0",
      borderRadius: 1,
      padding: 10,
      marginBottom: 10,
    },
    card: {
      width: "90%",
      backgroundColor: "#c1f587",
      borderRadius: 10,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 5,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#333",
      textAlign: "center",
    },
    infoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    label: {
      fontSize: 15,
      fontWeight: "600",
      color: "#666",
    },
    value: {
      fontSize: 15,
      color: "#333",
    },
    scrollView: {
      padding: 0,
      alignItems: "center",
      backgroundColor: "#ebf0e4",
    },
    expiredStatus: {
      fontSize: 15,
      color: "red",
      fontWeight: "bold",
    },
    validStatus: {
      fontSize: 15,
      color: "#333",
    },
    messageContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#ffdddd",
      padding: 10,
      borderRadius: 8,
      marginBottom: 20,
    },
    messageText: {
      color: "#d9534f",
    },
    dismissButton: {
      backgroundColor: "#d9534f",
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 18,
      alignItems: "center",
    },
    dismissButtonText: {
      color: "#fff",
    },
    detectedCarNumbersContent :{
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      bottom: 12,
      left: 12,
      right: 12,
    },
    captureButton: {
      backgroundColor: 'yellow',
      padding: 10,
      borderRadius: 25,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      alignSelf: 'center',
    },
    galleryButton: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    }
  });

  export default styles;
  