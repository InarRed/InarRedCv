import { UserPublicDto } from '../auth/AuthDto';

export interface CommentListItemDto {
  id: number;
  text: string;
  date: Date;
  user: UserPublicDto;
}

export interface CommentCreateDto {
  text: string;
  postId: number;
}
