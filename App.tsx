/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text
          style={{
            alignSelf: "center",
            marginTop: Number(Dimensions.get("screen").height / 2.5),
            fontSize: 20,
            fontWeight:'700',
          }}
        >
          Welcome to RNMongoDB
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
