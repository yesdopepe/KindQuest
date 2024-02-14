import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputForm = ({placeholder, Icon, onChangeText, secureTextEntry}) => {
  return (
    <View style={styles.InputCon}>
        {Icon && <Icon style={styles.icon} />}
        <TextInput style={styles.inputfield} placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry}/>
        </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    InputCon: {
        marginHorizontal: 30,
        height: 43,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 20,
      },
      inputfield: {
        flex: 1,
    height: 40,
      },
      icon: {
        marginLeft: 10,
        marginRight: 10,
      }

})