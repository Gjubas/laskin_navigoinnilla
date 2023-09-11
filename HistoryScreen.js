import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

export default function HistoryScreen({ route, navigation }) {
  const { history } = route.params;

  return (
    <View style={styles.historyContainer}>
      <Text style={styles.title}>History</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
      <Button
        title="Calculator"
        onPress={() => navigation.navigate("Calculator")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  historyContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  historyText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  historyItem: {
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
});
