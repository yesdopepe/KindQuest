import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TaskIcon from './TaskIcon'


const Task = (props) => {
  return (
    <View style={styles.container}>
       <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
       <TaskIcon/>
      <Text style={{fontFamily:'space grotesk', fontSize:15, fontWeight:'500'}}>{props.text}</Text>
       </View>
       <TouchableOpacity style={{backgroundColor:'#161F51', borderRadius:9, padding: 5}}>
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