import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Stars from '../components/Stars';



const Theme = ({children}) => {
  return (
    <LinearGradient colors={['#000', '#161F51', '#7082E4', '#DFDEFF', '#DCE1FE']} style={styles.linearGradient}>
        <Stars/>
        {children}
    </LinearGradient>
  )
}

export default Theme

const styles = StyleSheet.create({
  linearGradient: {
      flex: 1,
    },
})