import React from 'react';
import { BusinessCardSkillItemProps } from './BusinessCardSkillItem';
import { Typography } from '@mui/material';
import s from './BusinessCardSkills.module.sass';

const BusinessCardSkillListItem = ({ skill }: BusinessCardSkillItemProps) => {
  return (
    <li className={s.skill}>
      <Typography display='inline'>{skill.name}</Typography>
      <Typography display='inline'>{'    '}</Typography>
      <Typography display='inline' variant='caption' sx={{ fontStyle: 'italic' }}>
        {skill.comment}
      </Typography>
      <ul>
        {skill.frameworks?.map((f, index) => (
          <li key={index}>
            <Typography display='inline' variant='body2'>
              {f.name}
            </Typography>
            <Typography display='inline'>{'    '}</Typography>
            <Typography display='inline' variant='caption' sx={{ fontStyle: 'italic' }}>
              {f.comment}
            </Typography>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default BusinessCardSkillListItem;
