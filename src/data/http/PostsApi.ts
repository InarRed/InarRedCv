import { NewsStore } from '../NewsStore';
import { LoadingValueError, LoadingValueLoaded, LoadingValueLoading } from '../load/LoadedState';
import { $host } from './axios';
import { PostListDto } from '../dtos/PostDto';
import axios from 'axios';
import { runInAction } from 'mobx';

export const PostsApi = {};
