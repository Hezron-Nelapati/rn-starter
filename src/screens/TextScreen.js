import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState("");

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput 
                style = {styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newText) => {
                    setName(newText);
                }}
            />
            <Text> Your name is {name} </Text>
            { name.length < 4 ? <Text>Name must alteast be 4 characters</Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;