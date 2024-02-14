import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Link} from 'expo-router'
// importing the needed custom components
import InputForm from '../components/InputForm'
import Profile from '../components/Profile'
import Lock from '../components/Lock'
import Email from '../components/Email'
import FormSubmitButton from '../components/FormSubmitButton'



const SubmitForm = () => {}
const signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Be a Part of Us</Text>
      <InputForm placeholder='Username' Icon={Profile}/>
      <InputForm placeholder='Email' Icon={Email}/>
      <InputForm placeholder='Password' Icon={Lock}/>
      <InputForm placeholder='Repeat password' Icon={Lock}/>
      <TouchableOpacity style={styles.button} onPress={SubmitForm}>
          <Text style={{fontFamily:'space grotesk', fontSize:25, fontWeight:'700'}}>Kind in</Text>
        <FormSubmitButton style={{marginLeft:10}}/>
      </TouchableOpacity>
      <Link href='/login' style={styles.link2}>Or you can use this</Link>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({
  container: {
      flex: 0,
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