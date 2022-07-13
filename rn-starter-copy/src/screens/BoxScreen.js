import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}/>
      <View style={styles.viewTwoParent}>
        <View style={styles.textTwoStyle}/>
      </View>
      <View style={styles.textThreeStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: '#f6d2ce',
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: '#d9e4d8',
    borderWidth: 3,
    borderColor: 'green',
    fontSize: 18,
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end'
  },
  textThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: '#e1d8e9',
    borderWidth: 3,
    borderColor: 'purple',
  }
})

export default BoxScreen;