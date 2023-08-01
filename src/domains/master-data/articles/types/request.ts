import { TDefaultParams } from '@/domains/commons/types/request';

export type TArticleParams = TDefaultParams;

export type TArticlePayload = {
  title: string;
  description: string;
  body: string;
  published: boolean;
};
