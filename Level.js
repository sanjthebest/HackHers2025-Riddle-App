import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";

const Level = ({ route, navigation }) => {
  const { level, world, isWorldComplete } = route.params; // Get the level and world info passed from Map.js

  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [levelCompleted, setLevelCompleted] = useState(false);

  const riddle = {
    question: "I live under a bridge and demand a toll. What am I?",
    correctAnswer: "troll",
    hint: "t _ _ l l",
  };

  const handleSubmitAnswer = () => {
    if (answer.trim().toLowerCase() === riddle.correctAnswer.toLowerCase()) {
      setLevelCompleted(true);
      Alert.alert("Success!", "Level passed!", [
        {
          text: "Go to Map",
          onPress: () => navigation.navigate("Map"),
        },
        {
          text: "Go to Next Level",
          onPress: () => {
            if (level < 4) {
              navigation.push("Level", { level: level + 1, world, isWorldComplete });
            }
          },
        },
      ]);
    } else {
      Alert.alert("Incorrect", "Level failed, try again.", [
        { text: "Retry Level", onPress: () => setAnswer("") },
        { text: "Go to Map", onPress: () => navigation.navigate("Map") },
      ]);
    }
  };

  const handleHint = () => {
    setShowHint(true);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Level {level}</Text>
      <Text>{riddle.question}</Text>

      <TextInput
        placeholder="Type your answer here"
        value={answer}
        onChangeText={setAnswer}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 10,
          marginBottom: 20,
          paddingLeft: 10,
        }}
      />

      {showHint && (
        <Text style={{ marginBottom: 20, color: "gray" }}>
          Hint: {riddle.hint}
        </Text>
      )}

      <Button title="Give me a hint" onPress={handleHint} />
      <Button title="Submit Answer" onPress={handleSubmitAnswer} />

      <Button
        title="Back to Map"
        onPress={() => {
          //if (level === 1 && !levelCompleted) {
            //Alert.alert(
              //"Level not completed",
              //"You need to complete this level before you can go back to the map.",
              //[{ text: "OK" }]
            //);
          //} else {
            navigation.navigate("Map");
          }
        }
    //}
      />
    </View>
  );
};

export default Level;
