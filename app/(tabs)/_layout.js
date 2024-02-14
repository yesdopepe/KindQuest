import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Slot, useSegments, useRouter } from 'expo-router';
import { useAuth } from '../../Context/authContext'

SplashScreen.preventAutoHideAsync()
export default function _layout() {
    const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    //check if the user is authenticated
    const inApp = segments[0] === '(tabs)'
    if(isAuthenticated === undefined){
      return;
    }
    if (isAuthenticated == true) {
      SplashScreen.hideAsync();
    }else if(isAuthenticated == false){
      router.replace('/login')
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 60);
      
    }

  },[isAuthenticated])
  return <Slot/>
}