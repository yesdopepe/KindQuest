

import React from "react";
import { Button, Text, View } from "react-native";
import { useAuth } from "../../Context/authContext";

const Index = () => {
const { logout } = useAuth()
const handleLogout = async () => {
  await logout();
}
  return <View style={{flex: 1, justifyContent: "center", alignContent:"center", fonSize: 50,}}>
    <Text style={{fontSize: 50, textAlign:'center'}}>home</Text>
    <Button title="Logout" onPress={handleLogout} />
  </View>;
};
export default Index;
