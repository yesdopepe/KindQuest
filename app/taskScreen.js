import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import Theme from '../theme/Theme';
import HomeHeader from '../components/HomeHeader';

const task = () => {
  const data = useLocalSearchParams();
  return (
    
    <Theme>
      <HomeHeader/>
      <Text style={styles.text}>task {data.data}</Text>
    </Theme>
  )
}

export default task

const styles = StyleSheet.create({
text:{
  fontFamily:'space grotesk',
  fontSize:20,
  color:'#fff',
}
});