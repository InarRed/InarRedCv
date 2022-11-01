import React, { useContext } from 'react';
import { OnePostDto } from '../../../../data/news/PostDto';
import CommentItem from './CommentItem';
import AddCommentForm from './AddCommentForm';
import { AppContext } from '../../../../data/AppContext';
import { observer } from 'mobx-react-lite';

interface OnPostCommentsProps {
  post: OnePostDto;
}

const OnePostComments = observer(({ post }: OnPostCommentsProps) => {
  const { userStore } = useContext(AppContext);
  return (
    <>
      {post.comments.map((c) => (
        <CommentItem comment={c} key={c.id} />
      ))}
      {userStore.isUser && <AddCommentForm post={post} />}
    </>
  );
});

export default OnePostComments;
