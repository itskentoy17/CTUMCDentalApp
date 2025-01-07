import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SignUpScreen({ route, navigation }) {
  const { role } = route.params; // Get role from navigation params

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState('');
  const [patientType, setPatientType] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(''); // FIX: Initialize as a state variable

  const checkPasswordStrength = (pwd) => {
    if (pwd.length < 6) {
      setPasswordStrength('Weak');
    } else if (pwd.match(/(?=.*[0-9])(?=.*[!@#$%^&*])/)) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('Moderate');
    }
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill out all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    // Handle sign-up logic here (e.g., API calls, state updates)
    console.log({
      firstName,
      lastName,
      birthdate,
      gender,
      patientType,
      address,
      contactNumber,
      email,
      password,
      role,
    });
    navigation.navigate('NextScreen'); // Replace 'NextScreen' with your target screen after signup
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up as a {role === 'patient' ? 'Patient' : 'Doctor'}</Text>

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

        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text style={{ color: birthdate ? '#000' : '#aaa' }}>
            {birthdate ? birthdate.toDateString() : 'Select Birthdate'}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={birthdate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date) setBirthdate(date);
            }}
          />
        )}

        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Prefer not to say" value="prefer_not_to_say" />
        </Picker>

        {role === 'patient' && (
          <Picker
            selectedValue={patientType}
            onValueChange={(itemValue) => setPatientType(itemValue)}
            style={styles.input}
          >
            <Picker.Item label="Select Patient Type" value="" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Instructor" value="instructor" />
            <Picker.Item label="University Staff" value="university_staff" />
            <Picker.Item label="Non-Teaching Personnel" value="non_teaching_personnel" />
          </Picker>
        )}

        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={contactNumber}
          keyboardType="phone-pad"
          onChangeText={setContactNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
            checkPasswordStrength(text);
          }}
        />
        <Text style={styles.passwordStrength}>
          Password Strength: {passwordStrength}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          secureTextEntry={true}
          onChangeText={setConfirmPassword}
        />
        <Text style={styles.passwordMatch}>
          {confirmPassword && (password === confirmPassword ? 'Passwords match' : 'Passwords do not match')}
        </Text>

        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#268FBC',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordStrength: {
    fontSize: 12,
    color: 'orange',
    marginBottom: 10,
  },
  passwordMatch: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
});
