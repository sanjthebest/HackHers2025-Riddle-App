import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";

const Map = ({ navigation }) => {
  // Store completion state of worlds
  const [world1Complete, setWorld1Complete] = useState(false);
  const [world2Complete, setWorld2Complete] = useState(false);
  const [world3Complete, setWorld3Complete] = useState(false);
  const [world4Complete, setWorld4Complete] = useState(false);

  // Handle world click
  const handleWorldClick = (worldNumber) => {
    if (worldNumber === 1) {
      navigation.navigate("Level", { level: 1 }); // Go to level 1 of world 1
    } else if (worldNumber === 2 && world1Complete) {
      navigation.navigate("Level", { level: 1 }); // Go to level 1 of world 2
    } else if (worldNumber === 2 && !world1Complete) {
      Alert.alert("World 2 is not available yet", "Please finish World 1 before you enter World 2.");
    } else if (worldNumber === 3 && world2Complete) {
      navigation.navigate("Level", { level: 1 }); // Go to level 1 of world 3
    } else if (worldNumber === 3 && !world2Complete) {
      Alert.alert("World 3 is not available yet", "Please finish World 2 before you enter World 3.");
    } else if (worldNumber === 4 && world3Complete) {
      navigation.navigate("Level", { level: 1 }); // Go to level 1 of world 4
    } else if (worldNumber === 4 && !world3Complete) {
      Alert.alert("World 4 is not available yet", "Please finish World 3 before you enter World 4.");
    }
  };

  // Handle world completion (example logic)
  const completeWorld = (worldNumber) => {
    if (worldNumber === 1) {
      setWorld1Complete(true);
    } else if (worldNumber === 2) {
      setWorld2Complete(true);
    } else if (worldNumber === 3) {
      setWorld3Complete(true);
    } else if (worldNumber === 4) {
      setWorld4Complete(true);
    }
  };

  return (
    <View>

      {/* World 1 */}
      <Button
        title={`World 1 - ${world1Complete ? "Completed" : "Not Completed"}`}
        onPress={() => handleWorldClick(1)}
      />
      {/* World 2 */}
      <Button
        title={`World 2 - ${world2Complete ? "Completed" : "Not Completed"}`}
        onPress={() => handleWorldClick(2)}
      />
      {/* World 3 */}
      <Button
        title={`World 3 - ${world3Complete ? "Completed" : "Not Completed"}`}
        onPress={() => handleWorldClick(3)}
      />
      {/* World 4 */}
      <Button
        title={`World 4 - ${world4Complete ? "Completed" : "Not Completed"}`}
        onPress={() => handleWorldClick(4)}
      />
    </View>
  );
};

export default Map;
