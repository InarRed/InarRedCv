import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../data/AppContext';
import LoadingValueElement from '../../data/load/LoadingValueElement';
import BusinessCardInfo from './BusinessCardInfo/BusinessCardInfo';
import BusinessCardSkills from './BusinessCardSkills/BusinessCardSkills';
import BusinessCardProjects from './BusinessCardProjects/BusinessCardProjects';
import { observer } from 'mobx-react-lite';
import s from './BusinessCard.module.sass';

const BusinessCard = observer(() => {
  const { businessCardStore } = useContext(AppContext);
  useEffect(() => {
    businessCardStore.loadBusinessCard();
  }, []);

  return (
    <LoadingValueElement
      state={businessCardStore.businessCard}
      className={s.wrapper}
      loadedLayout={(value) => (
        <>
          <BusinessCardInfo card={value} />
          <BusinessCardSkills card={value} />
          <BusinessCardProjects card={value} />
        </>
      )}
    />
  );
});

export default BusinessCard;
