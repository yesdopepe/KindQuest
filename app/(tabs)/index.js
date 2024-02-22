import React from "react";
import { Button, Text, View, FlatList,StyleSheet } from "react-native";
import { useAuth } from "../../Context/authContext";
import Theme from "../../theme/Theme";
import Carousal from "../../components/ImageSlider";
import HomeHeader from "../../components/HomeHeader";
import Task from "../../components/Task";


const data = [{id:1, text:"Help 5 stray cats", kp:500 },
{id:2, text:"throw 5 bottles in the recycling bin", kp:300 },
{id:3, text:"Go to the nearest health facility and donate blood", kp:1000 },
{id:4, text:"Visit an animal shelter, feed some animals", kp:500 },
{id:5, text:"pick up plastic 5 plastic bags from the ground", kp:300 }]
const renderItem = ({item}) => {
  return (
    <Task text={item.text} KP={item.kp}/>
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
    showsVerticalScrollIndicator={false}
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