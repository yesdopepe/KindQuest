import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import {Link, router} from 'expo-router'
import Profile from '../../components/Profile'
import Lock from '../../components/Lock'
import FormSubmitButton from '../../components/FormSubmitButton'
const SubmitForm = () => {console.log('hello')}
export default function Login() {
  
  return (

    <View style={styles.container}>
      <Text style={styles.Header}>Welcome</Text>
      <Text style={styles.secondarytext}>Join the Circle of Goodness</Text>
      <View style={styles.container}>
        <View style={styles.InputCon}>
        <Profile style={styles.icon}/>
        <TextInput style={styles.inputfield} placeholder='Email'/>
        </View>
        
        <View style={styles.InputCon}>
        <Lock style={styles.icon}/>
        <TextInput style={styles.inputfield} placeholder='Password'/>
        </View>
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
      InputCon: {
        marginHorizontal: 30,
        height: 43,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 20,
      },
      inputfield: {
        flex: 1,
    height: 40,
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
      icon: {
        marginLeft: 10,
        marginRight: 10,
      }


})