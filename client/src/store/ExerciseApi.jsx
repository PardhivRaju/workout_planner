import { api } from './api';

export const ExerciseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getExercises: builder.query({
      query: (workoutId) => `/exercises/${workoutId}`,
      providesTags: ['Exercise'],
    }),
    getTodaysExercises: builder.query({
      query: () => `/exercises/today`,
    }),
    createExercise: builder.mutation({
      query: (body) => ({
        url: `/exercises/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Exercise'],
    }),
    updateExercise: builder.mutation({
      query: ({ id, body }) => ({
        url: `/exercises/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Exercise'],
    }),
    deleteExercise: builder.mutation({
      query: (id) => ({
        url: `/exercises/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Exercise'],
    }),
  }),
});

export const {
  useGetExercisesQuery,
  useCreateExerciseMutation,
  useUpdateExerciseMutation,
  useDeleteExerciseMutation,
  useLazyGetExercisesQuery,
  useGetTodaysExercisesQuery
} = ExerciseApi;
