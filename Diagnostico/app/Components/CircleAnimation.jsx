import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, useWindowDimensions } from 'react-native';

const CircleAnimation = ({ onAnimationComplete }) => {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();
    const animationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            onAnimationComplete();
        });
    }, []);

    const circleSize = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Math.sqrt(screenWidth * screenWidth + screenHeight * screenHeight)],
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.circle,
                    { width: circleSize, height: circleSize, borderRadius: circleSize / 2 },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        backgroundColor: '#084872',
        position: 'absolute',
    },
});

export default CircleAnimation;
