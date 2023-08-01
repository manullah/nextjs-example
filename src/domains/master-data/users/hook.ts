import { TGetDetailHookParams, TGetListHookParams, TUpdateHookParams } from '@/domains/commons/types/request';
import { TUserDetailResponse, TUserPaginateResponse, TUserResponse } from './types/entity';
import { useMutation, useQuery } from 'react-query';
import { createUser, deleteUser, fetchUserDetails, fetchUsers, updateUser } from './api';
import { TUserParams, TUserPayload } from './types/request';

export const useFetchUsers = (value: TGetListHookParams<TUserParams, TUserPaginateResponse>) => {
  return useQuery({
    queryKey: ['fetch-masterdata-users', value.params],
    queryFn: () => fetchUsers(value.params || {}),
    ...value.options,
  });
};

export const useFetchUserDetails = (value: TGetDetailHookParams<TUserResponse['id'], TUserDetailResponse>) => {
  return useQuery({
    queryKey: ['fetch-masterdata-user-details', value.id],
    queryFn: () => fetchUserDetails(value.id),
    enabled: !!value.id,
    ...value.options,
  });
};

export const useCreateUser = () => {
  return useMutation(createUser);
};

export const useUpdateUser = (value: TUpdateHookParams<TUserResponse['id'], TUserPayload>) => {
  return useMutation(() => updateUser(value.id, value.payload));
};

export const useDeleteUser = (id: TUserResponse['id']) => {
  return useMutation(() => deleteUser(id));
};
