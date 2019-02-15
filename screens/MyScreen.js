import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  Image
} from 'react-native';

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default class MyScreen extends React.Component {
  render() {

    return (
      <ScrollView style={styles.container}>
        <Title>Text</Title>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Hello, world!</Text>
        </View>

        <Title>Activity Indicator</Title>
        <View style={[styles.subContainer, styles.center]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>

        <Title>Button</Title>
        <View style={{ padding: 16 }}>
          <Button
            onPress={e => {
              console.log(e);
            }}
            title="Test"
            color="#0093EF"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

        <Title>Image</Title>
        <Image
          source={{
            uri:
              'https://facebook.github.io/react-native/docs/assets/favicon.png'
          }}
          style={{
            width: 80,
            height: 80
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  subContainer: {},
  text: {
    color: 'red',
    marginTop: 10
  },
  title: {
    fontSize: 24,
    marginTop: 10
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
