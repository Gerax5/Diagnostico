import React, { Children } from "react";
import { View, StyleSheet } from "react-native";

const Box = ({ height, width, children, backgroundColor, deep, marginleft, marginTop }) => {
    const property = StyleSheet.create({
      box: {
        height: height,
        width: width,
        backgroundColor: deep,
        marginLeft: marginleft,
        marginTop: marginTop
      },
      secondBox: {
        backgroundColor:backgroundColor,
        paddingBottom:5,
        padding:10
      }
    });

  
    return (
      <View style={[styles.box,property.box]}>
        <View style={[styles.secondBox,property.secondBox]}>
            {children}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    box:{
        borderRadius: 5,
        position:'relative'
    },
    secondBox:{
        justifyContent:'center',
        alignItems:'center'
    }
})


export default Box