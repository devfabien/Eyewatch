import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import {RootNavigation} from './src/navigation/rootnavigation';
import { Store } from './store';

export default function App() {
  return (
    <Provider store={Store}>
    <RootNavigation/>
    </Provider>
  );
}
