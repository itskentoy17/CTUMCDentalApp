import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

const Settingss = ({ navigation }) => {
  return (
    <View style={styles.container}>


      {/* Menu Items */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("NotificationSettingScreen")}>
        <Ionicons name="notifications-outline" size={24} color="#00C9E6" />
        <Text style={styles.menuText}>Notification Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("PasswordManager")}>
        <Ionicons name="key-outline" size={24} color="#00C9E6" />
        <Text style={styles.menuText}>Password Manager</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#268FBC",
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  menuText: {
    fontSize: 16,
    color: "black",
    marginLeft: 16,
  },
});

export default Settingss;
