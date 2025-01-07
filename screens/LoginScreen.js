import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "@env"; // Importing API base URL from the .env file

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Validation Error", "Please enter both username and password.");
      return;
    }

    setLoading(true);
    try {
      // Make API call to authenticate the user
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      });

      const { token, userId } = response.data;

      // Store the token for future requests
      await AsyncStorage.setItem("authToken", token);

      // Fetch user data after successful login
      const userResponse = await axios.get(`${API_BASE_URL}/api/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Navigate to HomeScreen with the fetched user data
      navigation.replace("HomeScreen", { user: userResponse.data });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.error || "Something went wrong, please try again.";
      Alert.alert("Login Failed", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Mascot Image */}
      <Image
        source={require("../assets/icon.png")} // Update with your mascot image
        style={styles.mascotImage}
      />

      {/* Welcome Text */}
      <Text style={styles.title}>Dental Care Connect</Text>
      <Text style={styles.subtitle}>BRIDGING SMILES WITH KNOWLEDGE AND CARE</Text>

      {/* Username Input Field */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="user" size={18} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>

      {/* Password Input Field */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="lock" size={18} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <FontAwesome5
            name={passwordVisible ? "eye" : "eye-slash"}
            size={18}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password Text */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Sign in</Text>
        )}
      </TouchableOpacity>

      {/* Or Continue With Text */}
      <Text style={styles.orContinueText}>Or continue with</Text>

      {/* Social Media Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="google" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="apple" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="facebook-f" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#268FBC",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  mascotImage: {
    width: 250,
    height: 250,
    marginTop: 50,
    borderRadius: 30,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#000",
  },
  forgotPasswordText: {
    color: "#FFD700",
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-end",
  },
  signInButton: {
    backgroundColor: "#1B6E91",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orContinueText: {
    color: "#fff",
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  socialButton: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
