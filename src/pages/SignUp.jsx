import  { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


// A custom component for the login tab
const LoginTab = () => {
  // State variables for the input values
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State variable for the alert message
  const [message, setMessage] = useState("");

  // A function to handle the login button press
  const handleLogin = async () => {
    try {
      // Validate the input values
      if (name && username && email && password) {
        // Send a post request to the backend with the input values
        const response = await fetch(
          "https://example.com/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, username, email, password }),
          }
        );
        // Check if the response is successful
        if (response.ok) {
          // Get the data from the response
          const data = await response.json();
          // Set the message state variable with a success message
          setMessage(data.message);
          // Navigate to another screen or perform other actions
          // ...
        } else {
          // Set the message state variable with an error message
          setMessage(message);
        }
      } else {
        // Set the message state variable with an empty string
        setMessage("");
      }
    } catch (error) {
      // Set the message state variable with an error message
      setMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      {message && (
        <Alert title="Message" message={message} />
      )}
    </View>
  );
};

// A custom component for the driver tab
const DriverTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver</Text>
    </View>
  );
};

// A custom component for the navigation bar tabs
const Tab = createMaterialTopTabNavigator();

// The main app component that uses the tabs and navigation hooks
const SignUp = () => {
  // Use the navigation hook to access the navigation object


  return (
    <Tab.Navigator>
      {/* Add two tabs: Customer and Driver */}
      <Tab.Screen name="Customer" component={LoginTab} />
      <Tab.Screen name="Driver" component={DriverTab} />
    </Tab.Navigator>
  );
};

// The styles for each component using Tailwind CSS classes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
});

export default SignUp;
