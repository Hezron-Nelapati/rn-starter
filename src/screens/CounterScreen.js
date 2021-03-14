import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);
    
    return(
        <View>
            <Text style={styles.textStyle}>Welcome To CounterScreen</Text>
            <Button title='Increase' onPress={() => {
                setCounter(counter + 1);
            }}/>
            <Button title='Decrease'onPress={() => {
                setCounter(counter - 1);
            }}/>
            <Text>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical: 10
    }
});

export default CounterScreen;