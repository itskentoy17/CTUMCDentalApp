import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function LandingPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DENTAL CARE CONNECT!</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("UserRole")} // Navigate to UserRole
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#268FBC",
        marginTop: 40,
            
    },
    title: {
        fontSize: 60,
        color: "#fff",
        marginBottom: 20,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#1E90FF",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
