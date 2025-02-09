import React from "react";
import { View, Text, Button, Alert } from "react-native";

const Map = ({ route, navigation }) => {
  // Get progress from route params (defaults to an empty object if undefined)
  const progress = route.params?.progress || { 
    1: [false, false, false, false], 
    2: [false, false, false, false], 
    3: [false, false, false, false], 
    4: [false, false, false, false] 
  };

  // Determine if each world is completed
  const world1Complete = progress[1].every(level => level);
  const world2Complete = progress[2].every(level => level);
  const world3Complete = progress[3].every(level => level);
  const world4Complete = progress[4].every(level => level);

  // Handle world click
  const handleWorldClick = (worldNumber) => {
    if (worldNumber === 1) {
      navigation.navigate("Level", { world: 1, level: 1, progress }); // Go to level 1 of world 1
    } else if (worldNumber === 2 && world1Complete) {
      navigation.navigate("Level", { world: 2, level: 1, progress }); // Go to level 1 of world 2
    } else if (worldNumber === 2 && !world1Complete) {
      Alert.alert("World 2 is not available yet", "Please finish World 1 before you enter World 2.");
    } else if (worldNumber === 3 && world2Complete) {
      navigation.navigate("Level", { world: 3, level: 1, progress }); // Go to level 1 of world 3
    } else if (worldNumber === 3 && !world2Complete) {
      Alert.alert("World 3 is not available yet", "Please finish World 2 before you enter World 3.");
    } else if (worldNumber === 4 && world3Complete) {
      navigation.navigate("Level", { world: 4, level: 1, progress }); // Go to level 1 of world 4
    } else if (worldNumber === 4 && !world3Complete) {
      Alert.alert("World 4 is not available yet", "Please finish World 3 before you enter World 4.");
    }
  };

  return (
    <View>
      <Text>Game Map</Text>

      {/* World 1 */}
      <Button
        title={`World 1 - ${world1Complete ? "Completed ✅" : "Not Completed ❌"}`}
        onPress={() => handleWorldClick(1)}
      />
      {/* World 2 */}
      <Button
        title={`World 2 - ${world2Complete ? "Completed ✅" : "Not Completed ❌"}`}
        onPress={() => handleWorldClick(2)}
      />
      {/* World 3 */}
      <Button
        title={`World 3 - ${world3Complete ? "Completed ✅" : "Not Completed ❌"}`}
        onPress={() => handleWorldClick(3)}
      />
      {/* World 4 */}
      <Button
        title={`World 4 - ${world4Complete ? "Completed ✅" : "Not Completed ❌"}`}
        onPress={() => handleWorldClick(4)}
      />
    </View>
  );
};

export default Map;
