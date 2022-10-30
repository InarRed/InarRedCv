import React, { ChangeEvent, useContext, useState } from 'react';
import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import { OnePostDto } from '../../../data/news/PostDto';
import s from '../OnePostPage.module.sass';
import { TextAreaMultiline } from '../../../components/TextAreaMultiline';
import { SuccessMessageDto } from '../../../data/load/loadDtos';
import { AppContext } from '../../../data/AppContext';
import { observer } from 'mobx-react-lite';
import LoadingValueElement from '../../../data/load/LoadingValueElement';
import { TagDto } from '../../../data/tags/TagDto';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

interface PostEditorProps {
  post: OnePostDto;
}

const PostEditor = observer(({ post }: PostEditorProps) => {
  const { tagsStore } = useContext(AppContext);
  const { onePostStore } = useContext(AppContext);
  const onChangeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onePostStore.postValue = { ...post, title: event.target.value };
  };
  const onChangePreview = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //TODO: change it on change of value
    onePostStore.postValue = { ...post, contentPreview: event.target.value };
  };
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onePostStore.postValue = { ...post, content: event.target.value };
  };
  const onTagsChange = (event: React.SyntheticEvent, values: (TagDto | undefined)[]) => {
    onePostStore.postValue = { ...post, tags: values as TagDto[] };
  };
  const onChangePublicationDate = (value: Dayjs | null) => {
    if (value) onePostStore.postValue = { ...post, publicationDate: value.toDate() };
  };

  const setPublicationDate = (value: Date | null) => {
    onePostStore.postValue = { ...post, publicationDate: value };
  };

  const [message, setMessage] = useState<SuccessMessageDto>();

  const updatePost = async () => {
    setMessage(await onePostStore.updatePost(post));
  };

  return (
    <div className={s.editorContainer}>
      <TextField value={post.title} onChange={onChangeTitle} label='Title' className={s.title} />
      <TextAreaMultiline
        value={post.contentPreview}
        onChange={onChangePreview}
        className={s.textFieldEditor}
        label='Preview'
        multiline
        variant='outlined'
      />
      <TextAreaMultiline
        value={post.content}
        onChange={onChangeContent}
        className={s.textFieldEditor}
        label='Content'
        multiline
        variant='outlined'
      />
      <LoadingValueElement
        state={tagsStore.tags}
        loadedLayout={(value) => (
          <Autocomplete
            className={s.tagsSelector}
            sx={{ height: 50 }}
            multiple
            getOptionLabel={(option) => option!.name}
            renderInput={(params) => <TextField {...params} variant='outlined' label='tags' />}
            options={value}
            onChange={onTagsChange}
            defaultValue={[...post.tags.map((t) => value.find((v) => v.id == t.id))]}
          />
        )}
      />

      <Typography>Creation date: {dayjs(post.creationDate).format('DD-MM-YYYY HH:mm')}</Typography>

      <div className={s.dateTime}>
        {post.publicationDate ? (
          <DateTimePicker
            label='Publication Date'
            ampm={false}
            onChange={onChangePublicationDate}
            value={dayjs(post.publicationDate)}
            renderInput={(params) => <TextField {...params} />}
          />
        ) : (
          <Typography>This post is`t published</Typography>
        )}
        <Button variant='outlined' color='secondary' onClick={() => setPublicationDate(new Date())}>
          Set current datetime
        </Button>
        {post.publicationDate && (
          <Button variant='outlined' color='secondary' onClick={() => setPublicationDate(null)}>
            Remove from publication
          </Button>
        )}
        {post.publicationDate && post.publicationDate > new Date() && (
          <Typography>
            Ahtung! This date is bigger than now, so this is suspended publication
          </Typography>
        )}
      </div>

      <Button variant='outlined' onClick={() => updatePost()}>
        Save
      </Button>
      <Typography>{message?.message}</Typography>
    </div>
  );
});

export default PostEditor;
