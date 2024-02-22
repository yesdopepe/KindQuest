import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TaskIcon from './TaskIcon'
import { router } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'

const Task = (props) => {
  const triggerTask = () => {
    router.push({pathname:"taskScreen", params:{
      data: props.text,
    }});
  }
  return (
    <View style={styles.container}>
       <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
       <TaskIcon/>
      <Text style={{fontFamily:'space grotesk', fontSize:15, fontWeight:'500', width:200}} numberOfLines={1} lineBreakMode='head'>{props.text}</Text>
       </View>
       <TouchableOpacity style={{backgroundColor:'#161F51', borderRadius:9, padding: 5}} onPress={triggerTask}>
        <Text style={{fontFamily:'space grotesk', fontSize:13, fontWeight:'400', color:"#fff"}}>Earn {props.KP}KP</Text> 
       </TouchableOpacity>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        backgroundColor:'#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 48,
        padding:10,
        borderRadius: 10,
        marginBottom: 20,
    }
})