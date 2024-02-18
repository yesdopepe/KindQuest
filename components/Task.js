import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskIcon from './TaskIcon'


const Task = (props) => {
  return (
    <View style={styles.container}>
       <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
       <TaskIcon/>
      <Text style={{fontFamily:'space grotesk', fontSize:15, fontWeight:'500'}}>{props.text}</Text>
       </View>

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