import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { BcSkill } from '../../data/dtos/BusinessCardDto';

interface BusinessCardSkillItemProps {
  skill: BcSkill;
}

const BusinessCardSkillItem = ({ skill }: BusinessCardSkillItemProps) => {
  return (
    <ListItemButton>
      <ListItemText primary={skill.name} secondary={skill.comment} />
    </ListItemButton>
  );
};

export default BusinessCardSkillItem;
