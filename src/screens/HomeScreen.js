import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
      <View>
        <Text style={styles.text}>Hi there!</Text>
        <Button
          onPress={() => navigation.navigate('Component')}
          title="Go to Component" 
        />
        <Button
          title="Go to List"
          onPress={() => navigation.navigate('List')}
        />
        <Button
          onPress={() => navigation.navigate('Image')}
          title="Go to Image"
        />
        <Button
          onPress={()=> navigation.navigate('Counter')}
          title="Go to Counter"
        />
        <Button
          onPress={() => {navigation.navigate('Color')}}
          title="Go to Color"
        />
        <Button
          onPress={() => {navigation.navigate('RGB')}}
          title='Go to RGB'
        />
        <Button
          onPress={() => {navigation.navigate('Text')}}
          title='Go to Text'
        />
        <Button
          onPress={() => {navigation.navigate('Box')}}
          title='Go to Box'
        />
      </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
