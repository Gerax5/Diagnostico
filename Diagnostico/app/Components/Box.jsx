import React, { Children } from "react";
import { View, StyleSheet } from "react-native";

const Box = ({ height, width, children, backgroundColor, shadowColor, _style }) => {
    const property = StyleSheet.create({
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
    },
    });

  
    return (
      <View style={property.shadowBox}>
        <View style={property.box}>
            {children}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    secondBox:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom: 5
    }
})


export default Box