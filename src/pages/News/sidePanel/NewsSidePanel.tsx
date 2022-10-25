import React, { useContext, useEffect, useState } from 'react';
import s from '../NewsPage.module.sass';
import { Button, Chip, Typography } from '@mui/material';
import { BorderedCard } from '../../../components/BorderedCard/BorderedCard';
import LoadingValueElement from '../../../data/load/LoadingValueElement';
import { observer } from 'mobx-react-lite';
import { AppContext } from '../../../data/AppContext';
import { useSearchParams } from 'react-router-dom';
import TagCreateModal from './TagCreateModal';

const NewsSidePanel = observer(() => {
  const { tagsStore, userStore } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const changeTag = (tagName: string) => {
    setSearchParams({ tag: tagName });
  };

  const clearTag = () => {
    searchParams.delete('tag');
    setSearchParams(searchParams);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    tagsStore.loadAll();
  }, []);

  return (
    <div className={s.sidePanel}>
      <div className={s.tagsSection}>
        <div className={s.tagsNameWrapper}>
          <Typography variant='h6'>Tags:</Typography>
          <Button onClick={clearTag} color='secondary'>
            clear search
          </Button>
        </div>
        <BorderedCard className={s.tagsCard}>
          <LoadingValueElement
            state={tagsStore.tags}
            className={s.tagsInner}
            loadedLayout={(value) => (
              <>
                {value.map((t) => (
                  <Chip
                    onClick={() => {
                      changeTag(t.name);
                    }}
                    className={s.chip}
                    key={t.id}
                    label={t.name}
                  />
                ))}
              </>
            )}
          />
        </BorderedCard>
        {userStore.isAdmin && (
          <Button onClick={openModal} variant='outlined'>
            Add Tag
          </Button>
        )}
        <TagCreateModal
          isOpen={isModalOpen}
          close={() => setIsModalOpen(false)}
          closeAndUpdateTagsList={(tag) => {
            setIsModalOpen(false);
            tagsStore.tags.value?.push(tag);
          }}
        />
      </div>
    </div>
  );
});

export default NewsSidePanel;
