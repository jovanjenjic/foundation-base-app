import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { parseQueryString } from '@utils/parseQueryString';

import { Users, UsersQueryArgsData, UsersResponse, FormValues } from '../types';

const baseUrl = 'http://142.132.229.249:3000/';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, UsersQueryArgsData | void>({
      query: (args) => {
        const queryString = args
          ? parseQueryString<UsersQueryArgsData>(args)
          : '';
        return {
          url: `/employees?${queryString}`,
          method: 'get',
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.employees.map(({ _id }) => ({
                type: 'Users' as const,
                id: _id,
              })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
      transformResponse: (response: UsersResponse) => response,
    }),
    getUserById: builder.query<Users, string>({
      query: (id) => ({
        url: `employees/id/${id}`,
        method: 'get',
      }),
      transformResponse: (response: Users) => response,
      providesTags: (result) => [{ type: 'Users', id: result?._id }],
    }),
    createUser: builder.mutation<Users, FormValues>({
      query: (users) => ({
        url: '/employees',
        method: 'post',
        body: users,
      }),
      transformResponse: (response: Users) => response,
      invalidatesTags: () => [{ type: 'Users', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  usePrefetch,
} = loginApi;
