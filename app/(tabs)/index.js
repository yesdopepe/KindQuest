import React from "react";
import { Button, Text, View } from "react-native";
import { useAuth } from "../../Context/authContext";
import Theme from "../../theme/Theme";



const Index = () => {
const { logout, user } = useAuth()
console.log(user)
const handleLogout = async () => {
  await logout();
}
  return (
    <Theme>
  <View style={{flex: 1, justifyContent: "center", alignContent:"center", fonSize: 50,}}>
    <Text style={{fontSize: 50, textAlign:'center'}}>home</Text>
    <Button title="Logout" onPress={handleLogout} />
  </View>
  </Theme>
  )
};
export default Index;