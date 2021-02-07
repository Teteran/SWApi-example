import * as React from 'react';
import { Card as RNPCard, Title, Paragraph } from 'react-native-paper';
import { ShipCardProps, PersonCardProps } from './card.props';

export function Card(props: ShipCardProps | PersonCardProps) {
  const { name, children, crew, mass } = props;

  return (
    <RNPCard>
      <RNPCard.Content>
        <Title>{name}</Title>
        <Paragraph>Value: {crew || mass}</Paragraph>
        {children}
      </RNPCard.Content>
    </RNPCard>
  );
}
