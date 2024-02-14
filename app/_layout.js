import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Stars from '../components/Stars';
import { LinearGradient } from 'expo-linear-gradient'


// importing the components
import { AuthContextProvider } from '../Context/authContext';

SplashScreen.preventAutoHideAsync()
const MainLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    'space grotesk': require('../assets/fonts/SpaceGrotesk.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && !fontError) {
      
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  
  return (
    <LinearGradient colors={['#000', '#161F51', '#7082E4', '#DFDEFF', '#DCE1FE']} style={styles.linearGradient}>
        <Stars/>
        <Slot />
    </LinearGradient>
  )
}
export default function RootLayout(){
  return(
    <AuthContextProvider>
      <MainLayout/> 
    </AuthContextProvider>
  )
}
const styles = StyleSheet.create({
  linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
})