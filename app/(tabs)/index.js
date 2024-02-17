import React from "react";
import { Button, Text, View, FlatList } from "react-native";
import { useAuth } from "../../Context/authContext";
import Theme from "../../theme/Theme";
import Carousal from "../../components/ImageSlider";


const Index = () => {
const { logout, user } = useAuth()
console.log(user)
const handleLogout = async () => {
  await logout();
}
  return (
    <Theme>
  <View style={{flex: 1, fonSize: 50,}}>
    <Carousal height={300}/>
    <Text style={{fontSize: 50, textAlign:'center'}}>home</Text>
  </View>
  </Theme>
  )
};
export default Index;