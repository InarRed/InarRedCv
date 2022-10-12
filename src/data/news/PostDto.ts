export class PostListItemDto {
  id: number = 0;
  title: string = '';
  contentPreview: string = '';
  date: Date = new Date();
  tags: { id: number; name: string }[] = [];
}

export class PostListDto {
  data: PostListItemDto[] = [];
  pageCount: number = 1;
}

export class OnePostDto {
  id: number = 0;
  title: string = '';
  date: Date = new Date();
  contentPreview: string = '';
  content: string = '';
  tags: { id: number; name: string }[] = [];
}
