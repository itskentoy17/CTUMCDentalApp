import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

export default function DailyReminders() {
  const [reminders, setReminders] = useState({
    toothBrushMorning: false,
    toothBrushEvening: true,
    mouthWash: false,
    flossing: false,
  });

  const [selectedReminder, setSelectedReminder] = useState(null);
  const [time, setTime] = useState({ hour: "", minute: "", ampm: "AM" });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleReminder = (key, value) => {
    // If the switch is turned ON, show the modal to set the time
    if (value) {
      setSelectedReminder(key);
      setIsModalVisible(true);
    } else {
      // If the switch is turned OFF, update reminders without showing the modal
      setReminders({ ...reminders, [key]: value });
    }
  };

  const saveTime = () => {
    setReminders({ ...reminders, [selectedReminder]: true });
    setIsModalVisible(false);
    setSelectedReminder(null);
  };

  const cancelTimeSelection = () => {
    setIsModalVisible(false);
    setSelectedReminder(null);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>


        {/* Tooth Brush Reminder */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tooth Brush</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Mornings</Text>
            <Switch
              value={reminders.toothBrushMorning}
              onValueChange={(value) => toggleReminder("toothBrushMorning", value)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Evenings</Text>
            <Switch
              value={reminders.toothBrushEvening}
              onValueChange={(value) => toggleReminder("toothBrushEvening", value)}
            />
          </View>
        </View>

        {/* Mouthwash Reminder */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mouthwash</Text>
          <Text style={styles.note}>
            Note: Best used at a different time to brushing. For example, after
            lunch.
          </Text>
          <View style={styles.row}>
            <Text style={styles.label}>Reminder</Text>
            <Switch
              value={reminders.mouthWash}
              onValueChange={(value) => toggleReminder("mouthWash", value)}
            />
          </View>
        </View>

        {/* Flossing Reminder */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Flossing</Text>
          <Text style={styles.note}>
            Note: Best to set after meals, once a day.
          </Text>
          <View style={styles.row}>
            <Text style={styles.label}>Reminder</Text>
            <Switch
              value={reminders.flossing}
              onValueChange={(value) => toggleReminder("flossing", value)}
            />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for Time Picker */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={cancelTimeSelection}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Please Enter Time:</Text>
            <View style={styles.timeInputContainer}>
              <TextInput
                style={styles.timeInput}
                keyboardType="numeric"
                placeholder="HH"
                maxLength={2}
                onChangeText={(value) => setTime({ ...time, hour: value })}
                value={time.hour}
              />
              <Text style={styles.colon}>:</Text>
              <TextInput
                style={styles.timeInput}
                keyboardType="numeric"
                placeholder="MM"
                maxLength={2}
                onChangeText={(value) => setTime({ ...time, minute: value })}
                value={time.minute}
              />
              <TouchableOpacity
                style={styles.ampmButton}
                onPress={() =>
                  setTime({ ...time, ampm: time.ampm === "AM" ? "PM" : "AM" })
                }
              >
                <Text style={styles.ampmText}>{time.ampm}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.modalSaveButton} onPress={saveTime}>
              <Text style={styles.modalSaveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#268FBC",
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  note: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#03A9F4",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timeInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    width: 60,
    marginHorizontal: 5,
  },
  colon: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ampmButton: {
    backgroundColor: "#03A9F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ampmText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalSaveButton: {
    backgroundColor: "#03A9F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalSaveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
