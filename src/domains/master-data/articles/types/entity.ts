import { TPaginateResponse, TResponseData } from '@/domains/commons/types/entity';

export type TArticleResponse = {
  id: number;
  title: string;
  body: string;
  description: string;
  published: boolean;
  author: null;
  createdAt: string;
  updatedAt: string;
};

export type TArticlePaginateResponse = TPaginateResponse<TArticleResponse>;

export type TArticleDetailResponse = TResponseData<TArticleResponse>;
