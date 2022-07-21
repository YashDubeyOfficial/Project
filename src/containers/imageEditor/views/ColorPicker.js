import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {LogBox} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PICKER_WIDTH = SCREEN_WIDTH * 0.9;
const CIRCLE_PICKER_SIZE = 45;
const INTERNAL_PICKER_SIZE = CIRCLE_PICKER_SIZE / 2;
// console.log('PICKER_WIDTH',PICKER_WIDTH)

const ColorPicker = () => {
  LogBox.ignoreLogs([
    'ViewPropTypes will be removed',
    'ColorPropType will be removed',
  ]);
  const COLORS = [
    '#FFFFFF',
    '#FF7A00',
    '#F7FC00',
    '#F5FA00',
    '#FF0000',
    '#4FF800',
    '#00A2FD',
    '#7000FF',
    '#000000',
  ];

  const [currentColor, setCurrentColor] = useState();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  // console.log(currentColor);
  const adjustedTranslateX = useDerivedValue(() => {
    return Math.min(
      Math.max(translateX.value, 0),
      PICKER_WIDTH - CIRCLE_PICKER_SIZE,
    );
  });


  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.x = adjustedTranslateX.value;
      console.log(context.y)
      translateY.value = withTiming(-28);
      scale.value = withTiming(1);
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
      // console.log(event);
    },
    onEnd: () => {
      translateY.value = withTiming(0);
      scale.value = withTiming(1);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: adjustedTranslateX.value},
        {scale: scale.value},
        {translateY: translateY.value},
      ],
    };
  });

  const rInternalPickerStyle = useAnimatedStyle(() => {
    const inputRange = COLORS.map(
      (_, index) => (index / COLORS.length) * PICKER_WIDTH,
    );
    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      COLORS,
    );
    setCurrentColor(backgroundColor);
    return {
      backgroundColor,
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={styles.container}>
          <LinearGradient
            colors={COLORS}
            style={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
          <Animated.View style={[styles.picker, rStyle]}>
            <Animated.View
              style={[styles.internalPicker, rInternalPickerStyle]}
            />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};
export default ColorPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F6CEFC',
    // transform: [{rotate: '90deg'}],
    
  },
  linearGradient: {
    borderRadius: 20,
    height: 15,
    width: PICKER_WIDTH,
  },
  picker: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: CIRCLE_PICKER_SIZE,
    height: CIRCLE_PICKER_SIZE,
    borderRadius: CIRCLE_PICKER_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  internalPicker: {
    width: INTERNAL_PICKER_SIZE,
    height: INTERNAL_PICKER_SIZE,
    borderRadius: INTERNAL_PICKER_SIZE / 2,
    borderWidth: 1.0,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});

