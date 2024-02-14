import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import {Link} from 'expo-router'
//importing the needed components
import Email from '../components/Email'
import Lock from '../components/Lock'
import FormSubmitButton from '../components/FormSubmitButton'
import InputForm from '../components/InputForm'

export default function Login() {
  const SubmitForm = () => {}
  return (

    <View style={styles.container}>
      <Text style={styles.Header}>Welcome</Text>
      <Text style={styles.secondarytext}>Join the Circle of Goodness</Text>
      <View style={styles.container}>
        <InputForm placeholder='Email' Icon={Email}/>
        <InputForm placeholder='Password' Icon={Lock}/>
        <Link href='/fpswd' style={styles.link}>Forgot your password?</Link>
        <TouchableOpacity style={styles.button} onPress={SubmitForm}>
          <Text style={{fontFamily:'space grotesk', fontSize:25, fontWeight:'700'}}>Kind in</Text>
        <FormSubmitButton style={{marginLeft:10}}/>
      </TouchableOpacity>
      </View>
      <Link href='/signup' style={styles.link2}>Don't have an account? Sign up</Link>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        rowGap:25
      },
      Header: {
      marginTop: 150,
      fontFamily: 'space grotesk',
      fontSize: 64,
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
      link: {
        alignSelf: 'flex-end',
        fontFamily: 'space grotesk',
        fontWeight: '400',
        fontSize: 15,
        color: "#161F51"
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