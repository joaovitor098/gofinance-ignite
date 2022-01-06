import { StatusBar } from "expo-status-bar";
import React from "react";
import {} from "react-native";
import { Dashboard } from "./src/screen/dashboard";

export default function App() {
  return (
    <>
      <Dashboard />
      <StatusBar style="auto" />
    </>
  );
}
