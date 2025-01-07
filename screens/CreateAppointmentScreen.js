import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker"; // Import Picker for dropdown

export default function CreateAppointmentScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const times = [
    "9:00 AM",

    "10:00 AM",

    "11:00 AM",

    "1:00 PM",

    "2:00 PM",

    "3:00 PM",

    "4:00 PM",
  ];

  const services = ["Treatment Plan", "Cleaning", "Filling", "Extraction"];
  const reasons = ["Routine Check", "Toothache", "Gum Problem", "Other"];

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.title}>APPOINTMENT FORM</Text>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text style={styles.label}>What type of service are you looking for?</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedService}
            onValueChange={(itemValue) => setSelectedService(itemValue)}
          >
            <Picker.Item label="Select Service" value="" />
            {services.map((service) => (
              <Picker.Item key={service} label={service} value={service} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>What is the reason for the appointment?</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedReason}
            onValueChange={(itemValue) => setSelectedReason(itemValue)}
          >
            <Picker.Item label="Select Reason" value="" />
            {reasons.map((reason) => (
              <Picker.Item key={reason} label={reason} value={reason} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Select an available date:</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.datePickerText}>
            {selectedDate.toDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={handleDateChange}
            minimumDate={new Date()}
          />
        )}

        <Text style={styles.label}>Available Time</Text>
        <View style={styles.timeSlots}>
          {times.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeSlot,
                selectedTime === time && styles.selectedTimeSlot,
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time && styles.selectedTimeText,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Fixed buttons (outside the ScrollView) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            console.log("Appointment Saved", {
              firstName,
              lastName,
              phoneNumber,
              selectedDate,
              selectedTime,
              selectedService,
              selectedReason,
            });
          }}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#268FBC",
  },
  form: {
    padding: 20,
    paddingBottom: 80, // Add padding at the bottom to prevent overlap with buttons
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#D1E8FF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    marginTop: 15,
  },
  dropdown: {
    backgroundColor: "#D1E8FF",
    borderRadius: 10,
    marginBottom: 10,
  },
  datePickerButton: {
    backgroundColor: "#D1E8FF",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  datePickerText: {
    fontSize: 16,
    color: "#000",
  },
  timeSlots: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  timeSlot: {
    width: "28%",
    backgroundColor: "#D1E8FF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  selectedTimeSlot: {
    backgroundColor: "#007ACC",
  },
  timeText: {
    color: "#000",
  },
  selectedTimeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute", // Fixed position at the bottom
    bottom: 20, // 20px above the bottom edge
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%", // Full width minus some margin
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#FF5252",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#007ACC",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
