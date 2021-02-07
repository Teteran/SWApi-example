import * as React from 'react';
import { ImageBackground as RNImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import { BackgroundImageProps } from './background-image.props';

export function BackgroundImage(props: BackgroundImageProps) {
  const { children, style, ...rest } = props;

  return (
    <RNImageBackground style={style || styles.image} {...rest}>
      {children}
    </RNImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});
