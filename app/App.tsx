import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { RootNavigator } from './navigation';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>
  );
}
