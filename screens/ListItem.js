import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler/Swipeable';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: '#4a4a4a',
    fontSize: 15,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#e4e4e4',
    marginLeft: 10,
  },
  leftAction: {
    backgroundColor: '#388e3c',
    justifyContent: 'center',
    flex: 1,
  },
  rightAction: {
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    // flex: 1,
    alignItems: 'flex-end',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 20,
  },
});

export const Separator = () => <View style={styles.separator} />;
//dragX seberapa jauh diswipe
//Swipe LEFT
const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.leftAction}>
        <Animated.Text style={[styles.actionText, {transform: [{scale}]}]}>
          EDIT
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

//Swipe RIGHT
const RightActions = ({progress, dragX, onPress}) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rightAction}>
        <Animated.Text style={[styles.actionText, {transform: [{scale}]}]}>
          DELETE
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

const ListItem = ({text, onSwipeFromLeft, onRightPress}) => (
  <Swipeable
    //   swipe from left add this!
    renderLeftActions={LeftActions}
    onSwipeableLeftOpen={onSwipeFromLeft}
    //   swipe from right add this!
    //function that return components
    renderRightActions={(progress, dragX) => (
      <RightActions progress={progress} dragX={dragX} onPress={onRightPress} />
    )}>
    <View styles={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </Swipeable>
);

export default ListItem;
