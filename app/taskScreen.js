import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useRef}from 'react'
import {Camera, CameraCapturedPicture, } from 'expo-camera'
import { useLocalSearchParams } from 'expo-router';
import Theme from '../theme/Theme';
import HomeHeader from '../components/HomeHeader';
import { router } from 'expo-router';




const task = () => {
  const cameraref = useRef()
//ask for permission to use the camera,
try {
  Camera.requestCameraPermissionsAsync();
  Camera.requestMicrophonePermissionsAsync();
} catch (error) {
  Alert.alert("Error", error);
  router.back();
}
  const takeaPicture = async() => {
    const options = { quality: 0.5, base64: true, skipProcessing: true };
    const data = await cameraref.current.takePictureAsync(options);
    console.log(data);
  }
  const data = useLocalSearchParams();
  return (
    
    <Theme>
      <HomeHeader/>
      <Text style={styles.text}>task {data.data}</Text>
      <Camera 
      style={styles.camera}
      type={Camera.Constants.Type.back}
      ref={cameraref}
      >
        <TouchableOpacity style={styles.button} onPress={()=>router.back()}>
      <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={takeaPicture}>
      <Text style={styles.text}>take a picture</Text>
      </TouchableOpacity>
      </Camera>
      
    </Theme>
  )
}

export default task

const styles = StyleSheet.create({
text:{
  fontFamily:'space grotesk',
  fontSize:20,
  color:'#fff',
},
camera:{
  flex: 1,
  flexDirection:'row',
  justifyContent: 'space-evenly',
},
button:{
  backgroundColor: '#161F51',
    height:50,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15,
    alignSelf: 'flex-end'
}
});