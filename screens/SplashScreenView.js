import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";

const { width } = Dimensions.get("window");

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={require("../assets/icon.png")} // Ensure the file path is correct
        style={styles.image}
        onError={() => console.warn("Error loading splash screen image")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#268FBC",
  },
  image: {
    width: width * 0.4, // Scales dynamically to 40% of the screen width
    height: width * 0.4, // Maintains square aspect ratio
    resizeMode: "contain", // Ensures the image aspect ratio is preserved
  },
});
