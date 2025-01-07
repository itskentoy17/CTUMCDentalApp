import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function PasswordManagerScreen() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Current Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={currentPassword}
          onChangeText={setCurrentPassword}
          placeholder="Enter your current password"
          secureTextEntry={!isCurrentPasswordVisible}
        />
        <TouchableOpacity
          onPress={() =>
            setIsCurrentPasswordVisible(!isCurrentPasswordVisible)
          }
        >
          <FontAwesome
            name={isCurrentPasswordVisible ? "eye" : "eye-slash"}
            size={20}
            color="#268FBC"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.label}>New Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Enter your new password"
          secureTextEntry={!isNewPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
        >
          <FontAwesome
            name={isNewPasswordVisible ? "eye" : "eye-slash"}
            size={20}
            color="#268FBC"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Confirm New Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your new password"
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity
          onPress={() =>
            setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
          }
        >
          <FontAwesome
            name={isConfirmPasswordVisible ? "eye" : "eye-slash"}
            size={20}
            color="#268FBC"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.changePasswordButton}>
        <Text style={styles.changePasswordText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: "#333",
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#268FBC",
    textDecorationLine: "underline",
  },
  changePasswordButton: {
    marginTop: 30,
    backgroundColor: "#268FBC",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  changePasswordText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
