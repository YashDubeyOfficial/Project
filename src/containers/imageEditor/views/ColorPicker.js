// HORIZONTALLLLLLL

import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
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
const PICKER_WIDTH = SCREEN_WIDTH * 0.5;
const CIRCLE_PICKER_SIZE = 35;
const INTERNAL_PICKER_SIZE = CIRCLE_PICKER_SIZE / 2;

const ColorPicker = props => {
  const [currentColor, setCurrentColor] = useState('');

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
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const adjustedTranslateX = useDerivedValue(() => {
    return Math.min(
      Math.max(translateY.value, 0),
      PICKER_WIDTH - CIRCLE_PICKER_SIZE,
    );
  });

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.x = adjustedTranslateX.value;
      translateX.value = withTiming(28);
      scale.value = withTiming(1);
    },
    onActive: (event, context) => {
      translateY.value = event.translationY + context.x;
      scale.value = withTiming(1);
    },
    onEnd: () => {
      translateX.value = withTiming(1);
      scale.value = withTiming(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: adjustedTranslateX.value},
        {translateY: translateX.value},
        {scale: scale.value},
      ],
    };
  });

  const rInternalPickerStyle = useAnimatedStyle(() => {
    const inputRange = COLORS.map(
      (_, index) => (index / COLORS.length) * PICKER_WIDTH,
    );

    const backgroundColor = interpolateColor(
      translateY.value,
      inputRange,
      COLORS,
    );
    // setCurrentColor(backgroundColor)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#F6CEFC',
    // transform: [{rotate: '90deg'}],
  },
  linearGradient: {
    borderRadius: 20,
    height: 10,
    width: PICKER_WIDTH,
  },
  picker: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: CIRCLE_PICKER_SIZE,
    height: CIRCLE_PICKER_SIZE,
    // borderRadius: CIRCLE_PICKER_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{rotateY: '45deg'}],
  },
  internalPicker: {
    width: INTERNAL_PICKER_SIZE,
    height: INTERNAL_PICKER_SIZE,
    borderRadius: INTERNAL_PICKER_SIZE / 2,
    borderWidth: 1.0,
    borderColor: 'rgba(0,0,0,0.2)',
    // backgroundColor
  },
});

export default ColorPicker;
