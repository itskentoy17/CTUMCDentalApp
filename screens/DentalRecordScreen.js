import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from "@expo/vector-icons";

const DentalRecordScreen = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState(null); // For filter selection
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility for dropdown

  const records = [
    { id: "1", date: "NOVEMBER 25 | 8:00 AM", title: "Dental Check up", status: "COMPLETED" },
    { id: "2", date: "NOVEMBER 25 | 8:00 AM", title: "Dental Check up", status: "COMPLETED" },
    { id: "3", date: "OCTOBER 25 | 1:00 PM", title: "Dental Check up", status: "COMPLETED" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.recordContainer}>
      <Text style={styles.recordDate}>{item.date}</Text>
      <Text style={styles.recordTitle}>{item.title}</Text>
      <Text style={styles.recordStatus}>{item.status}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Treatment</Text>
      </TouchableOpacity>
    </View>
  );

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <View style={styles.container}>
      {/* Search and Filters */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={20} color="#aaa" />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.sortFilter}>
          {/* Filter Dropdown Button */}
          <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
            <Text style={styles.filterText}>
              {selectedFilter ? `Filter: ${selectedFilter}` : "Filter"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Dropdown Filter */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Filter</Text>
            <Picker
              selectedValue={selectedFilter}
              onValueChange={(itemValue) => setSelectedFilter(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Treatment" value="Treatment" />
              <Picker.Item label="Date" value="Date" />
              <Picker.Item label="Time" value="Time" />
            </Picker>
            <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
              <Text style={styles.modalButtonText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Records List */}
      <FlatList
        data={records}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      {/* Footer Navigation */}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  searchContainer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  sortFilter: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterButton: {
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderRadius: 8,
  },
  filterText: {
    color: "#000",
  },
  list: {
    padding: 16,
  },
  recordContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  recordDate: {
    color: "#00bcd4",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  recordStatus: {
    color: "gray",
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#e0f7fa",
    borderRadius: 8,
  },
  buttonText: {
    color: "#00bcd4",
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#268FBC",
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonHome: {
    backgroundColor: "#00bcd4", // Highlight the home button
    padding: 12,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  picker: {
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#00bcd4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DentalRecordScreen;
