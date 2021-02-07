import * as React from 'react';
import { Text } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { ButtonProps } from './button.props';

export function Button(props: ButtonProps) {
  const { title, children, onPress, ...rest } = props;

  const content = children || <Text>{title}</Text>;

  return (
    <PaperButton onPress={onPress} {...rest}>
      {content}
    </PaperButton>
  );
}
