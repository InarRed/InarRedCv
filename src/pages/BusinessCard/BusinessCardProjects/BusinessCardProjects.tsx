import React from 'react';
import { BorderedCard } from '../../../components/BorderedCard/BorderedCard';
import { Typography, useTheme } from '@mui/material';
import BusinessCardProjectItem from './BusinessCardProjectItem';
import BusinessCardDto from '../../../data/businessCard/BusinessCardDto';

const BusinessCardProjects = ({ card }: { card: BusinessCardDto }) => {
  const theme = useTheme();
  return (
    <BorderedCard borderColor={theme.palette.secondary.main}>
      <Typography variant='h5'>My projects:</Typography>
      <div>
        {card.projects.map((p, i) => (
          <BusinessCardProjectItem project={p} key={i} />
        ))}
      </div>
    </BorderedCard>
  );
};

export default BusinessCardProjects;
