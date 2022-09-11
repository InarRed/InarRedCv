import React from 'react';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { BcProject } from '../../../data/dtos/BusinessCardDto';
import s from './BusinessCardProjects.module.sass';
import ButtonRef from '../../../components/ButtonRef/ButtonRef';

interface BusinessCardProjectItemProps {
  project: BcProject;
}

const BusinessCardProjectItem = ({ project }: BusinessCardProjectItemProps) => {
  return (
    <Card sx={{ borderRadius: '10px', margin: '10px auto' }} elevation={6}>
      <CardContent>
        <Typography variant='h5' sx={{ marginBottom: '15px', fontWeight: 600 }}>
          {project.name}
        </Typography>
        <Typography sx={{ fontStyle: 'italic' }}>{project.description}</Typography>
        <div className={s.technologiesContainer}>
          {project.technologies.map((t, i) => (
            <Card key={i} className={s.technologiesCard} elevation={12}>
              <Typography>{t}</Typography>
            </Card>
          ))}
        </div>
      </CardContent>
      <CardActions>
        <Typography variant='button'>Github:</Typography>
        {project.hrefs.map((h, i) => (
          <ButtonRef href={h.ref} name={h.name} key={i} color='primary' />
        ))}
      </CardActions>
    </Card>
  );
};

export default BusinessCardProjectItem;
