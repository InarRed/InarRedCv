import React from 'react';
import { BorderedCard } from '../../../components/BorderedCard/BorderedCard';
import { Typography, useTheme } from '@mui/material';
import BusinessCardSkillListItem from './BusinessCardSkillListItem';
import { BusinessCardDto } from '../../../data/businessCard/BusinessCardDto';

const BusinessCardSkills = ({ card }: { card: BusinessCardDto }) => {
  const theme = useTheme();
  return (
    <BorderedCard borderColor={theme.palette.secondary.dark}>
      <Typography variant='h5'>My skills:</Typography>
      <ul>
        {card.skills.map((skill, index) => (
          <BusinessCardSkillListItem key={index} skill={skill} />
        ))}
      </ul>
    </BorderedCard>
  );
};

export default BusinessCardSkills;
