import {View} from 'react-native';
import style from './src/Style';
import React from 'react';
import type {Node} from 'react';

import Onyx from 'react-native-onyx';
import ONYXKEYS from './src/ONYXKEYS';

import StateCounter from './src/components/StateCounter';
import OnyxCounter from './src/components/OnyxCounter';
import OnyxExamples from './src/components/OnyxExamples';

Onyx.init({
  keys: ONYXKEYS,
});

const App: () => Node = () => {
  return (
    <View style={style.container}>
      <StateCounter />
      <OnyxCounter />
      <View style={style.hr} />
      <OnyxExamples />
    </View>
  );
};

export default App;
