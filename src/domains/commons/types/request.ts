import { UseQueryOptions } from 'react-query';
import { TResponseError } from './entity';

export type TGetListHookParams<Params, Response> = {
  params?: Params;
  options?: UseQueryOptions<Response, TResponseError>;
};

export type TGetDetailHookParams<Id, Response> = {
  id: Id;
  options?: UseQueryOptions<Response, TResponseError>;
};

export type TUpdateHookParams<Id, Payload> = {
  id: Id;
  payload: Payload;
};

export type TDefaultParams = {
  search?: string;
};

export type TSortParams = {
  orderBy?: string;
  orderType?: 'asc' | 'desc';
};

export type TPaginateParams = {
  perPage?: number;
  page?: number;
};
