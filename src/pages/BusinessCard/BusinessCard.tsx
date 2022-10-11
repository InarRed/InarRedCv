import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../data/AppContext';
import BusinessCardInfo from './BusinessCardInfo/BusinessCardInfo';
import BusinessCardSkills from './BusinessCardSkills/BusinessCardSkills';
import BusinessCardProjects from './BusinessCardProjects/BusinessCardProjects';
import { InitBusinessCard } from '../../data/BusinessCardStore';

const BusinessCard = () => {
  const context = useContext(AppContext);
  const card = context.card;
  useEffect(() => {
    context.setCard(InitBusinessCard());
  }, []);

  return card ? (
    <div>
      <BusinessCardInfo card={card} />
      <BusinessCardSkills card={card} />
      <BusinessCardProjects card={card} />
    </div>
  ) : (
    <div>Downloading...</div>
  );
};

export default BusinessCard;
