import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen, Selection, BattleGround } from './../screens';

export type BattleType = {
  person: 'person';
  starship: 'starship';
};

export type RootParamList = {
  welcome: undefined;
  selection: undefined;
  battleground: {
    battleType: BattleType;
  };
};

const Stack = createStackNavigator<RootParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="selection" component={Selection} />
      <Stack.Screen name="battleground" component={BattleGround} />
    </Stack.Navigator>
  );
}

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});
