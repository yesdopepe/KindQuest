import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
//importing components
import Email from '../components/Email'
import InputForm from '../components/InputForm'

const SubmitForm = () => {}

const fpswd = () => {
  return (
    
      <View style={styles.container}>
      <Text style={styles.Header}>Welp...</Text>
      <Text style={styles.secondarytext}>Get your password back fellow</Text>
      <InputForm placeholder='Email' Icon={Email}/>
      <Text style={{fontFamily:'space grotesk', fontSize:15, fontWeight:'400', color:'#161F51'}}>...and stay on the path of kindness</Text>
      <TouchableOpacity style={styles.button} onPress={SubmitForm}>
        <Text style={{fontFamily:'space grotesk', fontSize:15, fontWeight:'400', color:'#DCE1FE'}}>Reset your password</Text>
      </TouchableOpacity>
      <Image source={require('../images/humanfigure.png')} style={{width:200, height:200, alignSelf:'flex-start'}}/>
    </View>
    
  )
}

export default fpswd

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
        height: 40,
        width: 180,
        backgroundColor: '#161F51',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 20,
      },
      link2: {
        marginTop: 10,
        fontFamily: 'space grotesk',
        fontWeight: '400',
        fontSize: 15,
        color: "#161F51"
      },
  
  
  })