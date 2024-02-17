import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './HeaderProfileIcon'
import ChatIcon from './ChatIcon'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
    <Profile/>
    <Text style={styles.text}>KindQuest</Text>
    <ChatIcon/>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        position:'absolute',
        top:30,
        left:0,
        right:0,
        padding:10,
    },
    text:{
        fontFamily:'space grotesk',
        fontSize:30,
        fontWeight:'700',
        color:'#7082E4',
    }
})