import { TArticleParams, TArticlePayload } from './types/request';
import { TArticleDetailResponse, TArticlePaginateResponse, TArticleResponse } from './types/entity';
import axios from '@/utils/axios';
import { MASTERDATA_ARTICLE_ENDPOINT } from './constant';

export const fetchArticles = async (params: TArticleParams) => {
  const result = await axios.get<TArticlePaginateResponse>(`${MASTERDATA_ARTICLE_ENDPOINT}`, { params });
  return result.data;
};

export const fetchArticleDetails = async (id: TArticleResponse['id']) => {
  const result = await axios.get<TArticleDetailResponse>(`${MASTERDATA_ARTICLE_ENDPOINT}/${id}`);
  return result.data;
};

export const createArticle = async (payload: TArticlePayload) => {
  const result = await axios.post<TArticleDetailResponse>(`${MASTERDATA_ARTICLE_ENDPOINT}`, payload);
  return result.data;
};

export const updateArticle = async (id: TArticleResponse['id'], payload: TArticlePayload) => {
  const result = await axios.patch<TArticleDetailResponse>(`${MASTERDATA_ARTICLE_ENDPOINT}/${id}`, payload);
  return result.data;
};

export const deleteArticle = async (id: TArticleResponse['id']) => {
  const result = await axios.delete<string>(`${MASTERDATA_ARTICLE_ENDPOINT}/${id}`);
  return result.data;
};
