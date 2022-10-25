import React from 'react';
import s from './BusinessCardInfo.module.sass';
import { Typography, useTheme } from '@mui/material';
import { BorderedCard } from '../../../components/BorderedCard/BorderedCard';
import { BusinessCardDto } from '../../../data/businessCard/BusinessCardDto';
import ButtonRef from '../../../components/ButtonRef/ButtonRef';

const BusinessCardInfo = ({ card }: { card: BusinessCardDto }) => {
  const theme = useTheme();
  return (
    <BorderedCard className={s.info} borderColor={theme.palette.primary.main}>
      <div>
        <img
          src={
            'https://sun9-34.userapi.com/impg/2dcCNt3WfrtJer6FGRRyEw0sJ1h3wONv5-Z-nA/8vedW4usI4Y.jpg?size=1944x1944&quality=96&sign=aab935a01463dfd4ad3a1fbe1f40391e&type=album'
          }
          alt='my avatar'
        />
      </div>
      <div className={s.textContainer}>
        <Typography variant='h4'>{card.name}</Typography>
        <Typography sx={{ fontStyle: 'italic', margin: '10px auto' }}>
          {card.myDescription}
        </Typography>
        <div className={s.divider} />
        <Typography variant='h6'>Contacts:</Typography>
        <div className={s.contactsListContainer}>
          {card.contacts.map((c, i) => (
            <ButtonRef href={c.ref} name={c.name} key={i} color='secondary' />
          ))}
        </div>
      </div>
    </BorderedCard>
  );
};

export default BusinessCardInfo;
