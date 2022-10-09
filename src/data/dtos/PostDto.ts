export class PostDto {
  title: string = '';
  date: Date = new Date();
  contentPreview: string = '';
  content: string = '';
  tags: { id: number; name: string }[] = [];
}

export class PostListItemDto {
  id: number = 0;
  title: string = '';
  contentPreview: string = '';
  date: Date = new Date();
  tags: { id: number; name: string }[] = [];
}
