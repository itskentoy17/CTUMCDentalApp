import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

const NotificationSettingScreen = ({ navigation }) => {
  // States for toggles
  const [generalNotification, setGeneralNotification] = useState(true);
  const [sound, setSound] = useState(true);
  const [soundCall, setSoundCall] = useState(true);
  const [vibrate, setVibrate] = useState(false);
  const [specialOffers, setSpecialOffers] = useState(false);
  const [payments, setPayments] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(false);
  const [cashback, setCashback] = useState(false);

  return (
    <View style={styles.container}>
 

      {/* Settings List */}
      <View style={styles.settingsList}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>General Notification</Text>
          <Switch
            value={generalNotification}
            onValueChange={setGeneralNotification}
            trackColor={{ false: "#E5E5E5", true: "#00C9E6" }}
            thumbColor={generalNotification ? "#00C9E6" : "#E5E5E5"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Sound</Text>
          <Switch
            value={sound}
            onValueChange={setSound}
            trackColor={{ false: "#E5E5E5", true: "#00C9E6" }}
            thumbColor={sound ? "#00C9E6" : "#E5E5E5"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Sound Call</Text>
          <Switch
            value={soundCall}
            onValueChange={setSoundCall}
            trackColor={{ false: "#E5E5E5", true: "#00C9E6" }}
            thumbColor={soundCall ? "#00C9E6" : "#E5E5E5"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Vibrate</Text>
          <Switch
            value={vibrate}
            onValueChange={setVibrate}
            trackColor={{ false: "#E5E5E5", true: "#00C9E6" }}
            thumbColor={vibrate ? "#00C9E6" : "#E5E5E5"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Special Offers</Text>
          <Switch
            value={specialOffers}
            onValueChange={setSpecialOffers}
            trackColor={{ false: "#E5E5E5", true: "#00C9E6" }}
            thumbColor={specialOffers ? "#00C9E6" : "#E5E5E5"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Payments</Text>
          <Switch
            value={payments}
            onValueChange={setPayments}
            trackColor={{ false: "#E5E5E5", true: "#00C9E6" }}
            thumbColor={payments ? "#00C9E6" : "#E5E5E5"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Promo And Discount</Text>
          <Switch
            value={promoDiscount}
            onValueChange={setPromoDiscount}
            trackColor={{ false: "#E5E5E5", true: "#00C9E6" }}
            thumbColor={promoDiscount ? "#00C9E6" : "#E5E5E5"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Cashback</Text>
          <Switch
            value={cashback}
            onValueChange={setCashback}
            trackColor={{ false: "#E5E5E5", true: "#00C9E6" }}
            thumbColor={cashback ? "#00C9E6" : "#E5E5E5"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00C9E6",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  settingsList: {
    marginTop: 16,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  settingText: {
    fontSize: 16,
    color: "black",
  },
});

export default NotificationSettingScreen;
