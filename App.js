  import {StyleSheet, Text, View} from 'react-native';
  import React from 'react';
  import MyTabs from './src/navigation/TabNav';
  import {ApolloProvider} from '@apollo/client';
  import client from './src/apolloClient';

  const App = () => {
    return (
      <ApolloProvider client={client}>
        <MyTabs />
      </ApolloProvider>
    );
  };

  export default App;

  const styles = StyleSheet.create({});
