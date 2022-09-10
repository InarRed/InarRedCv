import { CardProps } from '@mui/material/Card/Card';
import { Card, styled } from '@mui/material';

interface BorderedCardProps extends CardProps {
  borderColor?: string;
}

export const BorderedCard = styled(Card, {
  shouldForwardProp: (propName) => propName != 'color', //what a terrible syntax
})<BorderedCardProps>(({ borderColor }) => ({
  borderRadius: '20px',
  borderWidth: '2px',
  borderStyle: 'solid',
  padding: '20px',
  margin: '20px auto',
  borderColor: borderColor,
}));
