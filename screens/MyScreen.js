import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

export default class MyScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={ styles.subContainer}>
                    <Text>Hello, world</Text>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },

    subContainer: {

    }
});
