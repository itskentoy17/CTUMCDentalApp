import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AppointmentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.tabButtonActive]}>
          <Text style={styles.tabButtonTextActive}>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Cancelled</Text>
        </TouchableOpacity>
      </View>

      {/* Appointment List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Appointment 1 */}
        <View style={styles.appointmentCard}>
          <Text style={styles.appointmentDate}>NOVEMBER 25 | 8:00 AM</Text>
          <Text style={styles.appointmentDetails}>
            Dental Check-Up{"\n"}Pending for Approval
          </Text>
          <View style={styles.appointmentActions}>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Appointment 2 */}
        <View style={styles.appointmentCard}>
          <Text style={styles.appointmentDate}>OCTOBER 25 | 1:00 PM</Text>
          <Text style={styles.appointmentDetails}>Dental Check-Up{"\n"}Completed</Text>
          <TouchableOpacity style={styles.viewDetailsButton}>
            <Text style={styles.viewDetailsText}>View Details</Text>
          </TouchableOpacity>
        </View>

        {/* Appointment 3 */}
        <View style={styles.appointmentCard}>
          <Text style={styles.appointmentDate}>OCTOBER 5 | 10:00 AM</Text>
          <Text style={styles.appointmentDetails}>Dental Check-Up{"\n"}Cancelled</Text>
          <Text style={styles.cancelReason}>Reason: Change of mind</Text>
        </View>
      </ScrollView>

      {/* Create New Appointment Button */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate("CreateAppointmentScreen")} // Navigate to CreateAppointmentScreen
      >
        <Text style={styles.createButtonText}>Create New Appointment</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Notifications")}
        >
          <FontAwesome5 name="bell" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonHome}
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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#E0F7FA",
    borderRadius: 15,
  },
  tabButtonActive: {
    backgroundColor: "#03A9F4",
  },
  tabButtonText: {
    fontSize: 14,
    color: "#555",
  },
  tabButtonTextActive: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  scrollContainer: {
    padding: 15,
  },
  appointmentCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  appointmentDate: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  appointmentDetails: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 10,
  },
  appointmentActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#F44336",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  cancelButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 190,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  viewDetailsButton: {
    backgroundColor: "#03A9F4",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  viewDetailsText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelReason: {
    fontSize: 14,
    color: "#F44336",
    marginTop: 10,
  },
  createButton: {
    position: "absolute", // Fixed position at the bottom of the screen
    bottom: 80, // Adjust the bottom margin to ensure it doesn't overlap with the bottom navigation
    left: 20,
    right: 20,
    backgroundColor: "#03A9F4",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  bottomNav: {
    position: "absolute", // Keep absolute positioning to stay fixed at the bottom
    bottom: 0, // Ensure it's at the bottom
    left: 0, // Align to the left edge
    right: 0, // Align to the right edge
    height: 70, // Define the height of the nav bar
    backgroundColor: "#268FBC", // Background color for the nav bar
    flexDirection: "row", // Horizontal layout for the nav items
    justifyContent: "space-around", // Spread the nav items evenly
    alignItems: "center", // Vertically center the icons/text
    borderRadius: 15, // Rounded corners for a smooth look
    paddingHorizontal: 10, // Add padding on the sides to avoid items touching the edges
    shadowColor: "#000", // Add shadow for depth
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Elevation for Android shadow effect
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonHome: {
    width: 70,
    height: 70,
    backgroundColor: "#0288D1", // Highlight the home button
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -25, // Slightly raise the home button above the rest
  },
});
