import React, { useState } from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';

const Level = ({ route, navigation }) => {
  const { world = 1, level = 1, progress: incomingProgress } = route.params || {}; 

  const [progress, setProgress] = useState(
    incomingProgress || { 1: [false, false, false, false], 2: [false, false, false, false], 3: [false, false, false, false], 4: [false, false, false, false] }
  );

  const [answer, setAnswer] = useState('');
  const [levelCompleted, setLevelCompleted] = useState(false);

  const worlds = {
    1: [
      { riddle: "I live under a bridge and demand a toll. What am I?", answer: "troll", hint: "Who is that tripping over my bridge?!" },
      { riddle: "I turn pumpkins into carriages and rags into gowns. Who am I?", answer: "fairy godmother", hint: "Bibbity boppity boo!" },
      { riddle: "A circle of mushrooms is my dance floor. What am I?", answer: "fairy", hint: "Tinkerbell" },
      { riddle: "I brew potions and cast spells with my wand. What am I?", answer: "witch", hint: "The Salem _______ trials" }
    ],
    2: [
      { riddle: "I bubble and brew with all my might, mix the wrong thing, and it won't taste right. What am I?", answer: "cauldron", hint: "C _ _ l d _ _ _" },
      { riddle: "I slink and prowl, my eyes glow bright, I am her companion in the night. What am I?", answer: "cat", hint: "_ a _" },
      { riddle: "I'm pointed, long, and full of power, used to cast spells at any hour. What am I?", answer: "wand", hint: "_ _ n _" },
      { riddle: "By day, I walk as one of you, but when night falls, I change too. What am I?", answer: "werewolf", hint: "_ _ _ e _ l f" }
    ],
    3: [
      { riddle: "I shine so bright in midnight's gloom, calling beasts to howl and loom. What am I?", answer: "moon", hint: "Becomes full, and werewolves appear!" },
      { riddle: "Silver pieces, true and deep, with just one wound, eternal sleep. What am I?", answer: "bullet", hint: "Silver bullets kill werewolves" },
      { riddle: "With glowing eyes and fearsome sound, my call at night will shake the ground. What am I?", answer: "howl", hint: "A wolf does this to the moon" },
      { riddle: "By day, I rest, my duty stays, but when the call comes, I ride away. With sword in hand and heart so bright, who am I?", answer: "knight", hint: "A warrior in shining armor" }
    ],
    4: [
      { riddle: "A warrior's seat, both swift and bold, across the land, our bond is gold. What am I?", answer: "steed", hint: "Swift and loyal, I bear my knight, across the land, through day and night." },
      { riddle: "I drink no water, yet I shine; I face my foe in a single line. What am I?", answer: "sword", hint: "Forged in fire, sharp and true, in battle, I will cut right through." },
      { riddle: "I hold a crest, yet not a bird, I stop the blade without a word. What am I?", answer: "shield", hint: "I block the blow, protect the knight, I'm held in battle, through day and night. " },
      { riddle: "A home of stone, with towers high, a noble heart can’t tell a lie. What am I?", answer: "castle", hint: "I stand tall with walls so wide, where kings and queens may often hide. " }
    ]
  };

  // Ensure currentRiddle exists
  if (!worlds[world] || !worlds[world][level - 1]) {
    return (
      <View>
        <Text>Error: Invalid world or level. Please go back to the map.</Text>
        <Button title="Go Back to Map" onPress={() => navigation.navigate('Map')} />
      </View>
    );
  }

  const currentRiddle = worlds[world][level - 1];

  const handleSubmitAnswer = () => {
    if (answer.toLowerCase().trim() === currentRiddle.answer.toLowerCase().trim()) {
      setLevelCompleted(true);
  
      // Update progress for completed level
      const updatedProgress = { ...progress }; // Create a shallow copy of progress
      updatedProgress[world] = [...updatedProgress[world]]; // Copy the world array to avoid direct mutation
      updatedProgress[world][level - 1] = true; // Now you can safely modify the level's value
      
      setProgress(updatedProgress);
    
      Alert.alert("Success!", "Level completed!", [
        {
          text: "Go Back to Map",
          onPress: () => {
            setAnswer(''); // Clear answer before navigating
            navigation.navigate('Map', { progress: updatedProgress });
          },
        },
        {
          text: "Next Level",
          onPress: () => {
            setAnswer(''); // Clear answer before navigating
            // If not the last level of the world, move to the next level
            if (level < 4) {
              navigation.navigate('Level', { world, level: level + 1, progress: updatedProgress });
            } else if (world < 4) {
              // If last level of the world, move to the first level of the next world
              navigation.navigate('Level', { world: world + 1, level: 1, progress: updatedProgress });
            }
          },
        },
      ]);
    } else {
      Alert.alert("Incorrect Answer", "Please Try again!");
    }
  };
  
  
  

  const handleHint = () => {
    Alert.alert("Hint", currentRiddle.hint);
  };

  
  return (
    <View>
      <Text>World {world} - Level {level}</Text>
      <Text>{currentRiddle.riddle}</Text>
  
      {/* User Input */}
      <TextInput
        placeholder="Enter your answer here"
        value={answer}
        onChangeText={setAnswer}
      />
  
      {/* Buttons shown before the level is completed */}
      <Button title="Give Me a Hint" onPress={handleHint} />
      <Button title="Submit Answer" onPress={handleSubmitAnswer} />
  
      {/* Show navigation buttons after completing level */}
      {levelCompleted && (
        <>
          <Button title="Go Back to Map" onPress={() => navigation.goBack()} />
          
          {/* Show Next Level button only after completion */}
          <Button 
            title="Next Level" 
            onPress={() => {
              setAnswer('');
              if (level < 4) {
                navigation.navigate('Level', { world, level: level + 1, progress });
              } else if (world < 4) {
                navigation.navigate('Level', { world: world + 1, level: 1, progress });
              }
            }} 
          />
        </>
      )}
    </View>
  );
}

export default Level;
