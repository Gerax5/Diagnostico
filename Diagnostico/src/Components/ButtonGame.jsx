import React, { Children, useEffect, useState } from "react";
import { TouchableHighlight, View, StyleSheet, Text, Animated, Alert, Pressable, key } from "react-native";

const ButtonGame = ({
    backgroundColor, 
    shadowColor, 
    children, 
    height, 
    width, 
    _style,
    onPress,
    disabled}) =>{

    const showAlert = () => {
       console.log("si se presiono")
    };

    const [scaleAnim] = useState(new Animated.Value(1));

    const onPressIn = () => {
        Animated.timing(scaleAnim, {
            toValue: 0.95,
            duration: 200,
            useNativeDriver: true
        }).start();
    };

    const onPressOut = () => {
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start();
    };


    styles = StyleSheet.create({
        shadowBox:{
            marginTop:"5%",
            backgroundColor:shadowColor,
            paddingBottom: 5,
            height: height,
            width: width,
            borderRadius:15,
            elevation:5,
            ..._style
        },
        box:{
            backgroundColor:backgroundColor,
            height:"100%",
            width:"100%",
            borderRadius:15,
            paddingBottom: 5,
            justifyContent:'center',
            alignContent:'center'
        }
    })

    return (
        <TouchableHighlight onPress={onPress? onPress : showAlert} onPressIn={onPressIn} onPressOut={onPressOut} underlayColor="transparent" disabled={disabled ? disabled: false}>
            <Animated.View style={[styles.shadowBox,{transform:[{ scale: scaleAnim }]}]}>
                <View style={styles.box}>
                    {children}
                </View>
            
            </Animated.View>
        </TouchableHighlight>
        
    )
}
styles = StyleSheet.create({
    atras:{
        marginTop:"5%",
        paddingBottom: 5,
        height: 150,
        width: 240,
        borderRadius:25,
        elevation:5
}
})

export default ButtonGame