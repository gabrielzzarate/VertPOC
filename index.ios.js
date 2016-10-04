/**
 * Vert Proof of Concept
 * https://github.com/avantbaker/VertPOC
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import RootNavigator from "./Views/RootNavigator.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
});

class VertPOC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator ref="rootNavigator" />
      </View>
    );
  }
}

AppRegistry.registerComponent('VertPOC', () => VertPOC);
