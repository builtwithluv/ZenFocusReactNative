import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './src/reducers';
import Header from './src/components/common/Header';
import ContainerTest from './src/components/ContainerTest';

const logger = createLogger({ predicate: (getState, action) => __DEV__ });

const store = createStore(reducers, applyMiddleware(logger));

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Header headerText="ZenFocus" />
        <ContainerTest />
      </View>
    </Provider>
  );
};

export default App;
