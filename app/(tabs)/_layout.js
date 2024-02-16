import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Slot, useSegments, useRouter, Redirect, Stack, Tabs } from 'expo-router';
import { useAuth } from '../../Context/authContext'

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
  return (<Tabs>
    <Tabs.Screen name="index" options={{headerShown: false, }}/>
    <Tabs.Screen name="search" options={{ headerShown: false, }}/>
    <Tabs.Screen name="community" options={{headerShown: false, }}/>
    <Tabs.Screen name="notifications" options={{ headerShown: false, }}/>
    <Tabs.Screen name="ranking" options={{ headerShown: false, }}/>
  </Tabs>)
}