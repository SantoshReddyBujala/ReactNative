import React from "react";
import { View, Text, StyleSheet } from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Santosh Reddy Bujala</Text>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "black",
    fontSize: 40,
  },
});
