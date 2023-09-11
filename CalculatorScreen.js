import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import { useState } from "react";
import {
  StyleSheet,
  Alert,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function CalculatorScreen({ navigation }) {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const plusButton = () => {
    const operand1 = parseInt(number);
    const operand2 = parseInt(number2);
    const result = operand1 + operand2;
    setResult(result);
    addToHistory("+", operand1, operand2, result);
  };
  const minusButton = () => {
    const operand1 = parseInt(number);
    const operand2 = parseInt(number2);
    const result = operand1 - operand2;
    setResult(result);
    addToHistory("-", operand1, operand2, result);
  };

  const addToHistory = (operation, operand1, operand2, result) => {
    const historyItem = `${operand1} ${operation} ${operand2} = ${result}`;
    setHistory((prevHistory) => [...prevHistory, historyItem]);
  };

  const reset = () => {
    const empty = "";
    setResult(empty);
    setNumber(empty);
    setNumber2(empty);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.resultText}>Result: {result}</Text>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(text) => setNumber(text)}
            value={number}
          />
          <TextInput
            style={styles.input}
            textAlign={"center"}
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(text2) => setNumber2(text2)}
            value={number2}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button style={styles.button} onPress={plusButton} title=" + " />
            <View style={styles.space} />
            <Button style={styles.button} onPress={minusButton} title=" - " />
            <View style={styles.space} />
            <Button
              style={styles.button}
              title="History"
              onPress={() => {
                navigation.navigate("History", { history });
              }}
            />
            <StatusBar style="auto" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button style={styles.button} onPress={reset} title=" reset " />
            <StatusBar style="auto" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  space: {
    width: 20,
    height: 20,
  },
  button: {
    width: 20,
    marginBottom: 30,
    padding: 30,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 100,
  },
  input: {
    width: 150,
    borderColor: "gray",
    borderWidth: 1,
  },
});
