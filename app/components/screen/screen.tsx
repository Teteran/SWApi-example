import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { BackgroundImage } from '../background-image/background-image';
import { ScreenProps } from './screen.props';

export function Screen(props: ScreenProps) {
  const image = require('../../assets/bground.png');
  const { children, backgroundColor, style, ...rest } = props;

  return (
    <View style={[styles.container || style, { backgroundColor }]} {...rest}>
      <BackgroundImage source={image}>{children}</BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
