import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default home

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