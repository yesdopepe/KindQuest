import { Alert,  StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import {useRef, useState}from 'react'
import {Camera } from 'expo-camera'
import { useLocalSearchParams } from 'expo-router';
import Theme from '../theme/Theme';
import HomeHeader from '../components/HomeHeader';
import { router } from 'expo-router';
import Taskinfo from '../components/Taskinfo';



const task = () => {
  const [capturedImage, setCapturedImage] = useState(null);
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
    const options = { quality: 1, base64: true, skipProcessing: false };
    const data = await cameraref.current.takePictureAsync(options);
    console.log(data);
    setCapturedImage(data.uri);
  }
  const data = useLocalSearchParams();
  return (
    
    <Theme>
      
      {capturedImage ? (<>
      <Image source={{ uri: capturedImage }} style={styles.previewImage} />
      <Taskinfo data={data.data}/>
      <View style={{backgroundColor:'#161F51', borderRadius: 15, marginHorizontal: 20, padding: 10}}>
        <Text style={{width:300, fontFamily:'space grotesk', fontSize:16, fontWeight:"500", color:"#DCE1FE" }}>Are you sure you want to upload this photo? You can’t change it after you upload it, so think about it again.</Text>
        </View>
        <View style={styles.camera}>
        <TouchableOpacity style={styles.button} onPress={()=>router.back()}>
      <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={takeaPicture}>
      <Text style={styles.text}>take a picture</Text>
      </TouchableOpacity>
        </View>

      </>) : (
        <>
        <HomeHeader/>
      <Taskinfo data={data.data}/>
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
      </>)}
      
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
    alignSelf: 'flex-end',
    marginBottom: 20
},
previewImage: {
flex: 1,
resizeMode: "cover",
}
});