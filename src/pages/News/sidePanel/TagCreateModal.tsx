import React, { useContext, useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { AppContext } from '../../../data/AppContext';
import { SuccessMessageDto } from '../../../data/load/loadDtos';
import { TagDto } from '../../../data/tags/TagDto';
import s from '../NewsPage.module.sass';

export interface TagCreateModalProps {
  isOpen: boolean;
  close: () => void;
  closeAndUpdateTagsList: (tag: TagDto) => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
};

const TagCreateModal = ({ isOpen, close, closeAndUpdateTagsList }: TagCreateModalProps) => {
  const { tagsStore } = useContext(AppContext);
  const [tagName, setTagName] = useState('');
  const [message, setMessage] = useState<SuccessMessageDto | null>(null);
  const create = () => {
    if (tagName.length > 0) {
      tagsStore.createTag(tagName).then((value) => {
        setMessage(value);
        if (value.success) closeAndUpdateTagsList(value.inserted as TagDto);
      });
    }
  };
  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={style}>
        <div className={s.modalContainer}>
          <TextField
            label='Tag name'
            value={tagName}
            onChange={(event) => setTagName(event.target.value)}
          />
          <Button onClick={create}>Create</Button>
          {message && <Typography>{message.message}</Typography>}
        </div>
      </Box>
    </Modal>
  );
};

export default TagCreateModal;
