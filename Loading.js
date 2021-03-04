import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the weather</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 500,
        backgroundColor: '#0984e3',
        
    },
    text: {
        color: '#ffffff',
        fontSize: 34,
        fontWeight: 'bold',
    }
});