import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const ColorDetail = ({ name, onIncrease, onDecrease }) => {

    return(
        <View>
            <Text>{name}</Text>
            <Button
                title={`Increase ${name}`}
                onPress={() => { 
                    onIncrease()
                }}
            />
            <Button
                title={`Decrease ${name}`}
                onPress={() => {
                onDecrease()
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorDetail;