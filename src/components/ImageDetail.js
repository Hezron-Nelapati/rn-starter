import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    console.log(props);

    return(
        <View>
            <Image source={props.imageSource}/>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Text style={styles.textScore}>{props.imageScore}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    },
    textScore: {
        fontSize: 15
    }
});

export default ImageDetail;