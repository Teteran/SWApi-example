import React from 'react';
import { View } from 'react-native';
import { Screen, BackgroundImage, Button } from '../components';

export function Selection({ navigation }) {
  const image = require('../assets/bground.png');

  return (
    <Screen>
      <BackgroundImage source={image}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button
            title="Person"
            mode="contained"
            onPress={() => navigation.navigate('battleground')}
          />
        </View>
      </BackgroundImage>
    </Screen>
  );
}
