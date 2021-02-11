import * as React from 'react';
import { Button } from 'react-native-paper';

type PaperButtonProps = React.ComponentProps<typeof Button>;

export interface ButtonProps extends PaperButtonProps {
  title?: string;
  icon?: string;
  mode?: string;
  onPress: () => void;
  children?: React.ReactNode;
}
