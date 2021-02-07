import { ViewStyle, ColorValue } from 'react-native';

export interface ScreenProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: ColorValue;
}
