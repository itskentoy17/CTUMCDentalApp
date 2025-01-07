import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UsersScreen = () => {
  const [user, setUser] = useState({
    fullName: "Kentoy",
    phoneNumber: "09104946531",
    email: "kenneth040119@gmail.com",
    dateOfBirth: "06 / 11 / 2002",
  });

  const handleUpdateProfile = () => {
    alert("Profile Updated!");
  };

  return (
    <View style={styles.container}>


      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150", // Replace with your user's image URI
          }}
          style={styles.profilePicture}
        />
        <TouchableOpacity style={styles.editPictureButton}>
          <Ionicons name="camera" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* User Information */}
      <View style={styles.infoContainer}>
        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={user.fullName}
          onChangeText={(text) => setUser({ ...user, fullName: text })}
        />

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={user.phoneNumber}
          onChangeText={(text) => setUser({ ...user, phoneNumber: text })}
          keyboardType="phone-pad"
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={(text) => setUser({ ...user, email: text })}
          keyboardType="email-address"
        />

        {/* Date of Birth */}
        <Text style={styles.label}>Date Of Birth</Text>
        <TextInput
          style={styles.input}
          value={user.dateOfBirth}
          onChangeText={(text) => setUser({ ...user, dateOfBirth: text })}
        />

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#00bcd4",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  profilePictureContainer: {
    alignItems: "center",
    marginTop: -40,
    marginTop: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  editPictureButton: {
    position: "absolute",
    bottom: 0,
    right: 120,
    backgroundColor: "#00bcd4",
    borderRadius: 20,
    padding: 5,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 14,
    color: "#000",
  },
  updateButton: {
    backgroundColor: "#00bcd4",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UsersScreen;
