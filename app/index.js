import { useRootNavigationState } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { AuthStore } from "../store";
import React from "react";
import { Text, View } from "react-native";

const Index = () => {
  const segments = useSegments();
  const router = useRouter();
  const { isLoggedIn } = AuthStore.useState((s) => s);
  const navigationState = useRootNavigationState();

  React.useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything
      //  segment is not anything in the auth group.
      !isLoggedIn &&
      !inAuthGroup
    ) {
      // Redirect to the login page.
      SplashScreen.hideAsync()
      router.replace("/login");
    } else if (isLoggedIn) {
      // go to tabs root.
      SplashScreen.hideAsync()
      router.replace("/(tabs)/home");
    }
  }, [isLoggedIn, segments, navigationState?.key]);

  return <></>;
};
export default Index;
