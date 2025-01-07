import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function DentalChart({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "Caries", color: "#FF5722" },
    { name: "Prosthesis", color: "#4CAF50" },
    { name: "Extracted", color: "#757575" },
  ];

  return (
    <View style={styles.container}>
      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Chart Categories */}
        <View style={styles.categories}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.category}
              onPress={() => setSelectedCategory(category.name)}
            >
              <View
                style={[
                  styles.categoryColor,
                  { backgroundColor: category.color },
                ]}
              />
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category.name && styles.selectedText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Dental Chart Buttons */}
        <View style={styles.dentalChart}>
          <Text style={styles.chartText}>Your Dental Chart</Text>
          <View style={styles.chartGrid}>
            {Array.from({ length: 32 }, (_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.toothButton,
                  {
                    backgroundColor:
                      selectedCategory === "Caries"
                        ? "#FF5722"
                        : selectedCategory === "Prosthesis"
                        ? "#4CAF50"
                        : selectedCategory === "Extracted"
                        ? "#757575"
                        : "#E0E0E0",
                  },
                ]}
                onPress={() => console.log(`Tooth ${index + 1} selected`)}
              >
                <Text style={styles.toothText}>{index + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

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
          style={styles.navButtonHome}
          onPress={() => navigation.navigate("DentalChart")}
        >
          <FontAwesome5 name="list" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("UserScreen")}
        >
          <FontAwesome5 name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    backgroundColor: "#03A9F4",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  category: {
    alignItems: "center",
  },
  categoryColor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  selectedText: {
    color: "#03A9F4",
    textDecorationLine: "underline",
  },
  dentalChart: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  chartText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#555",
  },
  chartGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  toothButton: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  toothText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomNav: {
    position: "absolute",        // Keep absolute positioning to stay fixed at the bottom
    bottom: 0,                   // Ensure it's at the bottom
    left: 0,                     // Align to the left edge
    right: 0,                    // Align to the right edge
    height: 70,                  // Define the height of the nav bar
    backgroundColor: "#268FBC",  // Background color for the nav bar
    flexDirection: "row",        // Horizontal layout for the nav items
    justifyContent: "space-around",  // Spread the nav items evenly
    alignItems: "center",        // Vertically center the icons/text
    borderRadius: 15,            // Rounded corners for a smooth look
    paddingHorizontal: 10,       // Add padding on the sides to avoid items touching the edges
    shadowColor: "#000",         // Add shadow for depth
    shadowOpacity: 0.1,          // Shadow opacity
    shadowRadius: 5,             // Shadow blur radius
    elevation: 5,                // Elevation for Android shadow effect
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
});
