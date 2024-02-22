import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskTick from './TaskTick'

const Taskinfo = ({data , style}) => {
  return (
      <View style={styles.taskcontainer}>
      <Text style={{fontSize: 13, fontFamily: 'space grotesk', fontWeight:'500', color:'#161F51', width: 200,}}>{data} will you?</Text>
      <TaskTick/>
      </View>
  )
}

export default Taskinfo

const styles = StyleSheet.create({
  taskcontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 20
  }
})