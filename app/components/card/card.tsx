import * as React from 'react';
import { Card as RNPCard, Title, Paragraph } from 'react-native-paper';
import { PersonCardProps } from './card.props';

export function Card(props: PersonCardProps) {
  const { name, children, mass } = props;

  return (
    <RNPCard>
      <RNPCard.Content>
        <Title>{name}</Title>
        <Paragraph>Value: {mass}</Paragraph>
        {children}
      </RNPCard.Content>
    </RNPCard>
  );
}
