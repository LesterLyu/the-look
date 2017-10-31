/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/components/login/login';


export default class App extends Component<{}> {
  render() {
    return (
      <Login />
    );
  }
};

const styles = StyleSheet.create({

});