import React from "react";
import { Button, Text, View, FlatList,StyleSheet } from "react-native";
import { useAuth } from "../../Context/authContext";
import Theme from "../../theme/Theme";
import Carousal from "../../components/ImageSlider";
import HomeHeader from "../../components/HomeHeader";
import Task from "../../components/Task";



const data = [{id:1, text:"Help some cats", kp:1500 },{id:2, text:"Help some cats", kp:1500 },{id:3, text:"Help some cats", kp:1500 },{id:4, text:"Help some cats", kp:1500 },{id:5, text:"Help some cats", kp:1500 },{id:6, text:"Help some cats", kp:1500 },{id:7, text:"Help some cats", kp:1500 },{id:8, text:"Help some cats", kp:1500 }]
const renderItem = ({item}) => {
  return (
    <Task text={item.text}/>
  )
}
const Index = () => {
const { logout, user } = useAuth()
console.log(user)
const handleLogout = async () => {
  await logout();
}
  return (
    <Theme>
  <HomeHeader/>
  <View style={{flex:1}} >
    <Carousal height={300}/>
    <FlatList
    ListHeaderComponent={()=> <Text style={styles.listHeaderText}>Today We Have These For You</Text>}
    ListHeaderComponentStyle={styles.listHeader}
    data={data}
    renderItem={renderItem}
    keyExtractor={(item)=>item.id}
    />
  </View>
  </Theme>
  )
};
const styles = StyleSheet.create({
    listHeader:{
      paddingLeft: 10,
      paddingVertical: 20,
    },
    listHeaderText:{
      fontFamily: 'space grotesk',
      fontSize:20,
      fontWeight:'bold',
      color:'#fff',
    },
  })
export default Index;