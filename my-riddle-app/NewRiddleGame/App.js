import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const levels = [
    { riddle: "What has keys but can't open locks?", answer: "piano" },
    { riddle: "What has to be broken before you can use it?", answer: "egg" },
    { riddle: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "candle" },
    { riddle: "What begins with T, ends with T, and has T in it?", answer: "teapot" }
];

export default function App() {
    const [currentLevel, setCurrentLevel] = useState(0);
    const [userAnswer, setUserAnswer] = useState(''); // Corrected line

    const handleSubmit = () => {
        if (userAnswer.toLowerCase() === levels[currentLevel].answer) {
            if (currentLevel < levels.length - 1) {
                setCurrentLevel(currentLevel + 1);
                setUserAnswer(''); // Corrected line
            } else {
                Alert.alert("Congratulations!", "You've completed all levels!");
                setCurrentLevel(0); // Reset to the first level
            }
        } else {
            Alert.alert("Incorrect!", "Try again.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to World 1</Text>
            <Text style={styles.level}>Level {currentLevel + 1}</Text>
            <Text style={styles.riddle}>{levels[currentLevel].riddle}</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your answer here"
                value={userAnswer}
                onChangeText={setUserAnswer} // Corrected line
            />
            <Button title="Submit Answer" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    level: {
        fontSize: 18,
        marginBottom: 10,
    },
    riddle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 10,
    },
});