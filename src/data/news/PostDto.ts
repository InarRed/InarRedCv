import { TagDto } from '../tags/TagDto';
import { CommentListItemDto } from './CommentDto';

export class PostListItemDto {
  id: number = 0;
  title: string = '';
  contentPreview: string = '';
  creationDate: Date = new Date();
  publicationDate: Date = new Date();
  tags: { id: number; name: string }[] = [];
}

export class PostListDto {
  data: PostListItemDto[] = [];
  pageCount: number = 1;
}

export class OnePostDto {
  id: number = 0;
  title: string = '';
  creationDate: Date = new Date();
  publicationDate: Date | null = null;
  contentPreview: string = '';
  content: string = '';
  tags: TagDto[] = [];
  comments: CommentListItemDto[] = [];
}

export interface PostCreateDto {
  title: string;
  contentPreview: string;
  content: string;
  publicationDate: Date | null;
  tags: { id: number }[];
}
