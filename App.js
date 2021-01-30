import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Text} from 'react-native';

export default function App() {
  return (
    <PaperProvider>
      <Text>test</Text>
    </PaperProvider>
  );
}
