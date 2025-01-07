import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Alert } from "react-native"; // Import Alert for error warnings
import { API_BASE_URL } from "@env"; // Ensure your .env file is correctly configured


// Screens
import SplashScreen from "../screens/SplashScreenView";
import LandingPage from "../screens/LandingPage";
import UserRole from "../screens/UserRole";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import DailyReminders from "../screens/DailyReminders";
import DentalChart from "../screens/DentalChart";
import NotificationsScreen from "../screens/NotificationsScreen";
import AppointmentsScreen from "../screens/AppointmentScreen";
import CreateAppointmentScreen from "../screens/CreateAppointmentScreen";
import UserScreen from "../screens/UserProfileScreen";
import DentalRecordScreen from "../screens/DentalRecordScreen";
import UsersScreen from "../screens/User-Screen";
import Settingss from "../screens/Settingss";
import NotificationSettingScreen from "../screens/NotificationSettingScreen";
import PasswordManagerScreen from "../screens/PasswordManagerScreen";

// Header styles
const defaultHeaderOptions = {
  headerStyle: { backgroundColor: "#268FBC" },
  headerTintColor: "#fff",
};

const Stack = createStackNavigator();

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  // Splash screen timeout logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  // Warn if API_BASE_URL is missing
  useEffect(() => {
    if (!API_BASE_URL) {
      Alert.alert(
        "Configuration Error",
        "API_BASE_URL is not defined in your .env file. Please check your environment configuration."
      );
      console.warn("API_BASE_URL is not defined in your .env file.");
    }
  }, []);

  // Render SplashScreen if visible
  if (isShowSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserRole"
          component={UserRole}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: "Sign Up",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DailyReminders"
          component={DailyReminders}
          options={{
            title: "Daily Reminders",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="DentalChart"
          component={DentalChart}
          options={{
            title: "Dental Chart",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            title: "Notifications",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="Appointments"
          component={AppointmentsScreen}
          options={{
            title: "Appointments",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="CreateAppointmentScreen"
          component={CreateAppointmentScreen}
          options={{
            title: "Create Appointment",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            title: "User Profile",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="DentalRecordScreen"
          component={DentalRecordScreen}
          options={{
            title: "Dental Record",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="UsersScreen"
          component={UsersScreen}
          options={{
            title: "User Information",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={Settingss}
          options={{
            title: "Settings",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="NotificationSettingScreen"
          component={NotificationSettingScreen}
          options={{
            title: "Notification Setting",
            ...defaultHeaderOptions,
          }}
        />
        <Stack.Screen
          name="PasswordManager"
          component={PasswordManagerScreen}
          options={{
            title: "Password Manager",
            ...defaultHeaderOptions,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
