import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function NotificationsScreen({ navigation }) {
  // Sample data for notifications
  const notifications = [
    {
      id: 1,
      type: "Missed",
      message: "You missed the reminder regarding brushing your teeth in the morning.",
      time: "9:30 AM",
      date: "Today",
    },
    {
      id: 2,
      type: "Missed",
      message: "You missed the reminder regarding washing your dentures in the morning.",
      time: "8:00 AM",
      date: "Today",
    },
    {
      id: 3,
      type: "Missed",
      message: "You missed the reminder regarding brushing your teeth in the morning.",
      time: "8:30 AM",
      date: "Yesterday",
    },
    {
      id: 4,
      type: "Missed",
      message: "You missed the reminder regarding washing your dentures in the morning.",
      time: "8:00 AM",
      date: "Yesterday",
    },
    {
      id: 5,
      type: "Congratulations",
      message: "You have completed 7 days streak of mouth wash everyday.",
      time: "9:00 AM",
      date: "Yesterday",
    },
    {
      id: 6,
      type: "Missed",
      message: "You missed the reminder regarding washing your dentures in the night.",
      time: "10:00 PM",
      date: "Yesterday",
    },
  ];

  return (
    <View style={styles.container}>


      {/* Notifications List */}
      <ScrollView contentContainerStyle={styles.notificationList}>
        {["Today", "Yesterday", "Older"].map((section) => (
          <View key={section}>
            <Text style={styles.sectionTitle}>{section}</Text>
            {notifications
              .filter((item) => item.date === section)
              .map((item) => (
                <View key={item.id} style={styles.notificationCard}>
                  <FontAwesome5
                    name={item.type === "Missed" ? "exclamation-circle" : "check-circle"}
                    size={20}
                    color={item.type === "Missed" ? "#F44336" : "#4CAF50"}
                    style={styles.notificationIcon}
                  />
                  <View style={styles.notificationTextContainer}>
                    <Text style={styles.notificationType}>{item.type}</Text>
                    <Text style={styles.notificationMessage}>{item.message}</Text>
                  </View>
                  <Text style={styles.notificationTime}>{item.time}</Text>
                </View>
              ))}
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButtonHome}
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
    backgroundColor: "#268FBC",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  notificationList: {
    padding: 20,
    paddingBottom: 80, // For bottom nav spacing
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#555",
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 10,
  },
  notificationIcon: {
    marginRight: 15,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationType: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  notificationMessage: {
    color: "#555",
    fontSize: 14,
  },
  notificationTime: {
    color: "#888",
    fontSize: 12,
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
