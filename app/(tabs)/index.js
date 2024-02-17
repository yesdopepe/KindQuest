import React from "react";
import { Button, Text, View, FlatList } from "react-native";
import { useAuth } from "../../Context/authContext";
import Theme from "../../theme/Theme";
import Carousal from "../../components/ImageSlider";
import HomeHeader from "../../components/HomeHeader";


const Index = () => {
const { logout, user } = useAuth()
console.log(user)
const handleLogout = async () => {
  await logout();
}
  return (
    <Theme>
  <HomeHeader/>
  <View >
    <Carousal height={300}/>
  </View>
  </Theme>
  )
};
export default Index;