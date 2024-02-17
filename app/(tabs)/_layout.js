import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Slot, useSegments, useRouter, Redirect, Stack, Tabs } from 'expo-router';
import { useAuth } from '../../Context/authContext'
import Home from '../../components/Home'
import Search from '../../components/Search'
import Community from '../../components/Community'
import Notifications from '../../components/Notifications'
import Ranking from '../../components/Ranking'
SplashScreen.preventAutoHideAsync()
export default function _layout() {
    const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const inApp = segments[0] === '(tabs)'
    if (isAuthenticated == true) {
      SplashScreen.hideAsync();
    }else if(isAuthenticated == false){
      SplashScreen.hideAsync();
      return <Redirect href={'/login'}/>
      
    }
  return (<Tabs screenOptions={{tabBarShowLabel: false,}}>
    <Tabs.Screen name="index" options={{headerShown: false, tabBarIcon:({focused})=> <Home focused={focused} /> }}/>
    <Tabs.Screen name="search" options={{ headerShown: false, tabBarIcon: ({focused})=> <Search focused={focused}/>}}/>
    <Tabs.Screen name="community" options={{headerShown: false, tabBarIcon: ({focused})=> <Community focused={focused}/>}}/>
    <Tabs.Screen name="notifications" options={{ headerShown: false, tabBarIcon: ({focused}) => <Notifications focused={focused}/>}}/>
    <Tabs.Screen name="ranking" options={{ headerShown: false, tabBarIcon: ({focused}) => <Ranking focused={focused}/>}}/>
  </Tabs>)
}