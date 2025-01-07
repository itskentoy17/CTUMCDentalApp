import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function UserProfileScreen({ navigation }) {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../assets/profile.png")} // Replace with the correct path to your local image
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Kentoy</Text>
        <Text style={styles.userContact}>09104946531</Text>
        <Text style={styles.userEmail}>kenneth040119@gmail.com</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <MenuItem
          icon={<Ionicons name="person-outline" size={24} color="#03A9F4" />}
          label="Profile"
          onPress={() => navigation.navigate("UsersScreen")}
        />
        <MenuItem
          icon={<Ionicons name="settings-outline" size={24} color="#03A9F4" />}
          label="Settings"
          onPress={() => navigation.navigate("SettingsScreen")}
        />
        <MenuItem
          icon={<Ionicons name="help-circle-outline" size={24} color="#03A9F4" />}
          label="Help"
          onPress={() => navigation.navigate("Help")}
        />
        <MenuItem
          icon={<Ionicons name="log-out-outline" size={24} color="#03A9F4" />}
          label="Logout"
          onPress={() => setLogoutModalVisible(true)} // Open the logout modal
        />
      </View>

      {/* Logout Confirmation Modal */}
      <Modal
        transparent={true}
        visible={logoutModalVisible}
        animationType="fade"
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setLogoutModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => {
                  setLogoutModalVisible(false);
                  navigation.navigate("LoginScreen"); // Navigate to login screen or handle logout logic
                }}
              >
                <Text style={styles.logoutButtonText}>Yes, Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Notifications")}
        >
          <FontAwesome5 name="bell" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Appointments")}
        >
          <FontAwesome5 name="user-md" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <FontAwesome5 name="home" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("DentalChart")}
        >
          <FontAwesome5 name="list" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonHome}
          onPress={() => navigation.navigate("UserProfileScreen")}
        >
          <FontAwesome5 name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MenuItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.menuLabel}>{label}</Text>
      <Ionicons name="chevron-forward-outline" size={24} color="#bbb" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    backgroundColor: "#268FBC",
    paddingVertical: 30,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  userContact: {
    fontSize: 14,
    color: "#fff",
  },
  userEmail: {
    fontSize: 14,
    color: "#fff",
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  iconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#555",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#268FBC",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonHome: {
    width: 70,
    height: 70,
    backgroundColor: "#0288D1",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -25,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#555",
    fontSize: 16,
  },
  logoutButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    backgroundColor: "#FF5722",
    borderRadius: 5,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
