import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";

export default function UserRole({ navigation }) {
    const [selectedRole, setSelectedRole] = useState(null);

    const handleProceed = () => {
        if (selectedRole) {
            navigation.navigate("SignUpScreen", { role: selectedRole });
        } else {
            Alert.alert("Error", "Please select a role before proceeding!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select your role</Text>

            {/* Patient Role */}
            <TouchableOpacity
                style={[
                    styles.roleContainer,
                    selectedRole === "patient" && styles.selectedRole,
                ]}
                onPress={() => setSelectedRole("patient")}
            >
                <Image
                    source={require("../assets/patient.png")} // Replace with your patient image
                    style={styles.image}
                />
                <Text style={styles.roleText}>I'm a patient, looking for consult.</Text>
            </TouchableOpacity>

            {/* Doctor Role */}
            <TouchableOpacity
                style={[
                    styles.roleContainer,
                    selectedRole === "doctor" && styles.selectedRole,
                ]}
                onPress={() => setSelectedRole("doctor")}
            >
                <Image
                    source={require("../assets/doctor.png")} // Replace with your doctor image
                    style={styles.image}
                />
                <Text style={styles.roleText}>I'm a Doctor, will consult patients.</Text>
            </TouchableOpacity>

            {/* Proceed Button */}
            <TouchableOpacity
                style={[
                    styles.proceedButton,
                    !selectedRole && { backgroundColor: "#ccc" },
                ]}
                disabled={!selectedRole}
                onPress={handleProceed}
            >
                <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <Text style={styles.loginText}>
                Already have an account?{" "}
                <Text
                    style={styles.loginLink}
                    onPress={() => navigation.navigate("LoginScreen")}
                >
                    Login
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#268FBC",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        color: "#fff",
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
    },
    roleContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    selectedRole: {
        borderColor: "#1E90FF",
        borderWidth: 2,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
    roleText: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
    proceedButton: {
        backgroundColor: "#1E90FF",
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    loginText: {
        textAlign: "center",
        color: "#fff",
        marginTop: 20,
    },
    loginLink: {
        color: "#FFD700",
        fontWeight: "bold",
    },
});
