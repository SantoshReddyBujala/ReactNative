import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

// Simple Login Form component
const LoginForm = () => {
  // State for username and password fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle login button press
  const handleLogin = () => {
    if (username && password) {
      // Show success alert if both fields are filled
      Alert.alert("Login Successful", `Welcome, ${username}!`);
    } else {
      // Show error alert if any field is empty
      Alert.alert("Error", "Please enter both username and password.");
    }
  };

  return (
    // Main container for the login form
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Login</Text>
      {/* Username input field */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        accessibilityLabel="Username input"
      />
      {/* Password input field */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessibilityLabel="Password input"
      />
      {/* Login button */}
      <Button
        title="Login"
        onPress={handleLogin}
        accessibilityLabel="Login button"
      />
    </View>
  );
};

export default LoginForm;

// Styles for the login form component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});
