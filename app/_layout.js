import { Stack, Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
export default function Layout() {
    const [fontsLoaded, fontError] = useFonts({
        'space grotesk': require('../assets/fonts/SpaceGrotesk.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
return <Slot screenOptions={{headerShown: false }} initialRouteName='login' onLayoutRootView/>;
}