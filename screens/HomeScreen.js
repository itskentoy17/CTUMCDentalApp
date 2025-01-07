import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hi Kentoy 👋</Text>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileImage}
          />
        </View>

        {/* Appointments Section */}
        <View style={styles.appointmentsCard}>
          <Text style={styles.appointmentTitle}>APPOINTMENTS</Text>
          <Text style={styles.appointmentSubtitle}>LATEST APPOINTMENTS</Text>
          <View style={styles.appointmentDetails}>
            <FontAwesome5 name="calendar-alt" size={24} color="#268FBC" />
            <Text style={styles.appointmentDate}>November 25 | 8:00 AM</Text>
            <Text style={styles.appointmentStatus}>Dental Check-Up</Text>
            <Text style={styles.pendingApproval}>Pending for Approval</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Jump to:</Text>
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("GetCare")}
          >
            <FontAwesome5 name="hand-holding-heart" size={20} color="#fff" />
            <Text style={styles.quickActionText}>Get Care</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("DailyReminders")}
          >
            <FontAwesome5 name="clock" size={20} color="#fff" />
            <Text style={styles.quickActionText}>Daily Reminders</Text>
          </TouchableOpacity>
        </View>

        {/* Disease History Section */}
        <View style={styles.diseaseHistoryContainer}>
        <Text style={styles.diseaseHistoryTitle}>Dental and Medical Record</Text>
          <TouchableOpacity onPress={() => navigation.navigate("DentalRecordScreen")}>
        <Text style={styles.viewAllText}>View all &gt;</Text>
          </TouchableOpacity>
        </View>

        {/* Video Suggestions Section */}
        <Text style={styles.sectionTitle}>
          Or you can watch videos related to:
        </Text>
        <View style={styles.videoSuggestionsContainer}>
          {["Brushing", "Flossing", "Mouth wash", "Tongue Cleaning"].map(
            (topic, index) => (
              <TouchableOpacity key={index} style={styles.videoButton}>
                {/* Render different icons based on the topic */}
                {topic === "Brushing" && (
                  <FontAwesome5 name="brush" size={20} color="#fff" />
                )}
                {topic === "Flossing" && (
                  <FontAwesome5 name="cut" size={20} color="#fff" />
                )}
                {topic === "Mouth wash" && (
                  <FontAwesome5 name="tint" size={20} color="#fff" />
                )}
                {topic === "Tongue Cleaning" && (
                  <FontAwesome5 name="tooth" size={20} color="#fff" />
                )}
                <Text style={styles.videoButtonText}>{topic}</Text>
              </TouchableOpacity>
            )
          )}
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
          style={styles.navButtonHome}
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
    marginTop: 10,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  greetingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  appointmentsCard: {
    backgroundColor: "#268FBC",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  appointmentTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  appointmentSubtitle: {
    color: "#fff",
    marginVertical: 5,
  },
  appointmentDetails: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  appointmentDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#268FBC",
  },
  appointmentStatus: {
    fontSize: 14,
    color: "#757575",
  },
  pendingApproval: {
    color: "#03A9F4",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  quickActionButton: {
    backgroundColor: "#03A9F4",
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    alignItems: "center",
  },
  quickActionText: {
    color: "#fff",
    marginTop: 5,
  },
  videoSuggestionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap", // Allow wrapping to fit in two rows if needed
    marginBottom: 80, // Provide enough space above the bottom navigation
  },
  videoButton: {
    backgroundColor: "#03A9F4",
    padding: 20, // Increase padding for larger buttons
    borderRadius: 8,
    flexBasis: "47%", // Each button takes almost half the width with spacing
    alignItems: "center",
    marginBottom: 10, // Add spacing between rows
  },
  videoButtonText: {
    color: "#fff",
    marginTop: 10, // Increase margin for better spacing
    fontSize: 16, // Larger font size for better readability
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

  diseaseHistoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    marginBottom: 40,
  },
  diseaseHistoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C2C2C", // Dark text for the title
  },
  viewAllText: {
    fontSize: 14,
    color: "#268FBC", // Blue color for "View all"
    textDecorationLine: "underline", // Optional: for underline effect
    marginLeft: 30,
  },
});
