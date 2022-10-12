import React, { useState } from 'react';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { BcSkill } from '../../../data/businessCard/BusinessCardDto';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export interface BusinessCardSkillItemProps {
  skill: BcSkill;
}

const BusinessCardSkillItem = ({ skill }: BusinessCardSkillItemProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={skill.name} secondary={skill.comment} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout={'auto'}>
        <List disablePadding>
          {skill.frameworks?.map((framework, index) => (
            <ListItemButton sx={{ pl: 4 }} key={index}>
              <ListItemText primary={framework.name} secondary={framework.comment} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default BusinessCardSkillItem;
