import * as React from 'react';

export interface CardProps {
  name: string | undefined;
  children?: React.ReactNode;
}

export interface ShipCardProps extends CardProps {
  crew: number;
}

export interface PersonCardProps extends CardProps {
  mass: number;
}
