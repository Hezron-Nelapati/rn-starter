import React, { useState, useReducer } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import ColorDetail from '../components/ColorDetail';

const COLOR_INCREMENT = 20;

//!!using useReducer
//state :: all state variables. Ex: {red:0, green:0, blue:0}
//action :: tells how to change state object. here {colorToChange: 'red || 'green' || 'blue', amount: -val || +val  }
const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
          return  state.red + action.amount > 255 || state.red + action.amount < 0 ?  state :
          { ...state, red: state.red + action.amount };
        case 'green':
            if(state.green + action.amount > 255 || state.green + action.amount < 0) { return state; }
            return { ...state, green: state.green + action.amount };
        case 'blue':
            if(state.blue + action.amount > 255 || state.blue + action.amount < 0) { return state; } 
            return { ...state, blue: state.blue + action.amount };
        default:
            return { ...state };
    }
};

const RgbScreen = () => {

    //!!using useReducer
    //dispatch : runs reducer when there is a change in state
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    //!!using useState
    // const [rColor, setRColor] = useState(0);
    // const [gColor, setGColor] = useState(0);
    // const [bColor, setBColor] = useState(0);

    // const setColor = (color, change) => {
    //     switch (color) {
    //         case 'red':
    //             if(rColor + change  > 255 || rColor + change < 0){
    //                 return;
    //             }else{
    //                 setRColor(rColor + change);
    //             }
    //         case 'green':
    //             if(gColor + change > 255 || gColor + change < 0 ){
    //                 return;
    //             }else{
    //                 setGColor(gColor + change);
    //             } 
    //         case 'blue':
    //             if(bColor + change > 255 || bColor + change < 0){
    //                 return;
    //             }else{
    //                 setBColor(bColor + change);
    //             }
    //     }
    // }

    return(
        <View>
            <ColorDetail 
                name='Red' 
                onIncrease={() => {
                    //!!using useState
                    //setColor('red',COLOR_INCREMENT);
                    //console.log({rColor});
                    //setRColor(rColor + COLOR_INCREMENT), console.log({rColor})
                    //!!using useReducer
                    dispatch({colorToChange: 'red', amount: COLOR_INCREMENT })

                    }} 
                onDecrease={() => {
                    //!!using useState
                    //setColor('red',-COLOR_INCREMENT);
                    //console.log({rColor})
                    //setRColor(rColor - COLOR_INCREMENT), console.log({rColor})
                    //!!using useReducer
                    dispatch({colorToChange: 'red', amount: -COLOR_INCREMENT })
                    }} >
            </ColorDetail>
            <ColorDetail 
                name='Green' 
                onIncrease={() => {
                    //!!using useState
                    //setColor('green',COLOR_INCREMENT);
                    //console.log({gColor});
                    //setGColor(gColor + COLOR_INCREMENT), console.log({gColor})
                    //!!using useReducer
                    dispatch({colorToChange: 'green', amount: COLOR_INCREMENT })
                    }} 
                onDecrease={() => {
                    //setColor('green',-COLOR_INCREMENT);
                    //console.log({gColor});
                    //setGColor(gColor - COLOR_INCREMENT), console.log({gColor})
                    //!!using useReducer
                    dispatch({colorToChange: 'green', amount: -COLOR_INCREMENT })
                    }} >
            </ColorDetail>
            <ColorDetail 
                name='Blue' 
                onIncrease={() => {
                    //!!using useState
                    //setColor('blue',COLOR_INCREMENT);
                    //console.log({bColor});
                    //setBColor(bColor + COLOR_INCREMENT), console.log({bColor})
                    //!!using useReducer
                    dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT })
                    }} 
                onDecrease={() => {
                    //!!using useState
                    //setColor('blue',-COLOR_INCREMENT);
                    //console.log({bColor});
                    //setBColor(bColor - COLOR_INCREMENT), console.log({bColor})
                    //!!using useReducer
                    dispatch({colorToChange: 'blue', amount: -COLOR_INCREMENT })
                    }} > 
            </ColorDetail>
            <View style={{ height: 200, width: 300, backgroundColor: /*`rgb(${rColor},${gColor},${bColor})`*/`rgb(${red},${green},${blue})`, marginLeft: 30 }}></View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default RgbScreen;