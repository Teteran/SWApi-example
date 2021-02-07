import React from 'react';
import { View } from 'react-native';
import { Screen, Button } from '../components';

export function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="START"
          mode="contained"
          onPress={() => {
            navigation.navigate('selection');
          }}
        />
      </View>
    </Screen>
  );
}
