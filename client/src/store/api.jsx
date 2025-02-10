import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
    credentials: 'include',
  }),
  tagTypes: ['User', 'Workout', 'Exercise', 'Set'],
  endpoints: () => ({}),
});

export default api;
