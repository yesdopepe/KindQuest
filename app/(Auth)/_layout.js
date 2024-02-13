import { StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Slot } from 'expo-router'
import Stars from '../../components/Stars'


const ScreenLayout = () => {
  return (
    
      <LinearGradient colors={['#000', '#161F51', '#7082E4', '#DFDEFF', '#DCE1FE']} style={styles.linearGradient}>
        
        <Stars/>
        <Slot />
    </LinearGradient>
    
  )
}

export default ScreenLayout

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
})