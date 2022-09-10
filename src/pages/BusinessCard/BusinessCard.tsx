import React, { useContext, useEffect } from 'react';
import s from './BusinessCard.module.sass';
import { List, Typography, useTheme } from '@mui/material';
import { BorderedCard } from '../../components/BorderedCard/BorderedCard';
import { AppContext, InitBusinessCard } from '../../data/BusinessCardContext';
import BusinessCardSkillItem from './BusinessCardSkillItem';

const BusinessCard = () => {
  const theme = useTheme();
  const context = useContext(AppContext);
  const card = context.card;
  useEffect(() => {
    context.setCard(InitBusinessCard());
  });

  return card ? (
    <div>
      <BorderedCard className={s.info} borderColor={theme.palette.primary.main}>
        <img
          src={'https://99px.ru/sstorage/56/2014/12/image_561712140926117102780.jpg'}
          alt='my avatar'
        />
        <div className={s.textContainer}>
          <Typography variant='h4'>Inar Belkin</Typography>
          <Typography sx={{ fontStyle: 'italic' }}>
            Ничего не умею, ничем не интересуюсь, наймите меня
          </Typography>
          <Typography variant='h6'>Основные навыки:</Typography>
          <Typography>C#</Typography>
        </div>
      </BorderedCard>
      <BorderedCard borderColor={theme.palette.secondary.main}>
        <Typography variant='h5'>Мои навыки:</Typography>
        <List>
          {card.skills.map((s, index) => (
            <BusinessCardSkillItem skill={s} key={index} />
          ))}
        </List>
      </BorderedCard>
    </div>
  ) : (
    <div>Download</div>
  );
};

export default BusinessCard;
