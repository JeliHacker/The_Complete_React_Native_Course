import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }

    return { ...state, counter: state.counter + action.payload};
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    const { counter } = state
   

    return <View>
        <Button 
            title="Increase" 
            onPress={() => {
                // Dont' do this!
                // counter++;  
                dispatch({ type: "counter", payload: 1 })
            }} 
        />
        <Button 
            title="Decrease" 
            onPress={() => {
                dispatch({ type: "counter", payload: -1 })
            }} 
        />
        <Text>Current Count: {counter}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;