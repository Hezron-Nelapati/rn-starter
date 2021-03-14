import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Child #1</Text>
            <Text style={styles.textStyle2}>Child #2</Text>
            <Text style={styles.textStyle3}>Child #3</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'stretch',
        flexDirection: 'column',
        height: 200 ,
        justifyContent: 'space-around'
    },
    textStyle1: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'flex-end',
        ...StyleSheet.absoluteFillObject
    },
    textStyle3: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'flex-start',
        position: 'relative'
    }
});

export default BoxScreen;