import { TGetDetailHookParams, TGetListHookParams, TUpdateHookParams } from '@/domains/commons/types/request';
import { TArticleDetailResponse, TArticlePaginateResponse, TArticleResponse } from './types/entity';
import { useMutation, useQuery } from 'react-query';
import { createArticle, deleteArticle, fetchArticleDetails, fetchArticles, updateArticle } from './api';
import { TArticleParams, TArticlePayload } from './types/request';

export const useFetchArticles = (value: TGetListHookParams<TArticleParams, TArticlePaginateResponse>) => {
  return useQuery({
    queryKey: ['fetch-masterdata-articles', value.params],
    queryFn: () => fetchArticles(value.params || {}),
    ...value.options,
  });
};

export const useFetchArticleDetails = (value: TGetDetailHookParams<TArticleResponse['id'], TArticleDetailResponse>) => {
  return useQuery({
    queryKey: ['fetch-masterdata-article-details', value.id],
    queryFn: () => fetchArticleDetails(value.id),
    enabled: !!value.id,
    ...value.options,
  });
};

export const useCreateArticle = () => {
  return useMutation(createArticle);
};

export const useUpdateArticle = (value: TUpdateHookParams<TArticleResponse['id'], TArticlePayload>) => {
  return useMutation(() => updateArticle(value.id, value.payload));
};

export const useDeleteArticle = (id: TArticleResponse['id']) => {
  return useMutation(() => deleteArticle(id));
};
