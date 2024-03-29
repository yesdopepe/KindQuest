import {useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import {Link} from 'expo-router'
// importing the needed custom components
import InputForm from '../components/InputForm'
import Profile from '../components/Profile'
import Lock from '../components/Lock'
import Email from '../components/Email'
import FormSubmitButton from '../components/FormSubmitButton'
import {useAuth} from '../Context/authContext'
import Theme from '../theme/Theme'




const signup = () => {
  const { Register } = useAuth();
  const handleSignup = async () => {

    if (!emailRef.current || !passwordRef || !usernameRef || !passMatchRef) {
      Alert.alert("sign up" ,"Please fill in all fields");
      return;
    }
    if (passwordRef.current !== passMatchRef.current) {
      Alert.alert("sign up", "Passwords do not match");
      return; 
    }
    let response = await Register(emailRef.current, passwordRef.current,usernameRef.current, null);
    if (!response.success) {
      Alert.alert("sign up", response.data);
    }
  }
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passMatchRef = useRef("");
  const usernameRef = useRef("");
  return (
    <Theme>
    <View style={styles.container}>
      <Text style={styles.Header}>Be a Part of Us</Text>
      <InputForm placeholder='Username' Icon={Profile} onChangeText={value => usernameRef.current = value}/>
      <InputForm placeholder='Email' Icon={Email} onChangeText={value => emailRef.current = value}/>
      <InputForm placeholder='Password' Icon={Lock} onChangeText={value => passwordRef.current = value} secureTextEntry={true}/>
      <InputForm placeholder='repeat password' Icon={Lock} onChangeText={value => passMatchRef.current = value}/>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={{fontFamily:'space grotesk', fontSize:25, fontWeight:'700'}}>Kind up</Text>
        <FormSubmitButton style={{marginLeft:10}}/>
      </TouchableOpacity>
      <Link href='/login' style={styles.link2}>Or you can use this</Link>
    </View>
    </Theme>
  )
}

export default signup

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      rowGap:25
    },
    Header: {
    marginTop: 150,
    fontFamily: 'space grotesk',
    fontSize: 40,
    fontWeight: '700',
    color: '#FFF',
    },
    secondarytext: {
      fontFamily: 'space grotesk',
      fontSize: 18,
      fontWeight: '400',
      color: '#FFF',
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      alignSelf: 'flex-end',
      marginTop: 20,
    },
    link2: {
      marginTop: 10,
      alignSelf: 'center',
      fontFamily: 'space grotesk',
      fontWeight: '400',
      fontSize: 15,
      color: "#161F51"
    },


})