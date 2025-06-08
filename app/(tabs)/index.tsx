import React from "react";
import { View, Text, StyleSheet } from "react-native";

const app = ({ name = "Santosh Reddy Bujala" }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        accessible={true}
        accessibilityLabel={`Name: ${name}`}
      >
        {name}
      </Text>
      <View style={styles.grid}>
        {Array.from({ length: 12 }, (_, index) => (
          <View
            key={index}
            style={styles.gridItem}
            accessible={true}
            accessibilityLabel={`Grid item ${index + 1}`}
          >
            <Text style={styles.gridItemText}>{index + 1}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

app.defaultProps = {
  name: "Santosh Reddy Bujala",
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: 20, // Add padding for better layout
  },
  text: {
    color: "black",
    fontSize: 40,
    textAlign: "center", // Center text alignment
  },
  grid: {
    marginTop: 20, // Add spacing between the text and grid
    flexDirection: "row",
    flexWrap: "wrap", // Wrap items to the next row
    justifyContent: "center", // Center items horizontally
  },
  gridItem: {
    width: 50, // Fixed width for grid items
    height: 50, // Fixed height for grid items
    margin: 5, // Add spacing between grid items
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    backgroundColor: "#f0f0f0", // Light background color for grid items
    borderRadius: 5, // Rounded corners for grid items
  },
  gridItemText: {
    fontSize: 16,
    color: "black",
  },
});
