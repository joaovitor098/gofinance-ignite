import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import "react-native-gesture-handler";

import theme from "./src/global/styles/theme";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/app.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppRoutes />
        </GestureHandlerRootView>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
