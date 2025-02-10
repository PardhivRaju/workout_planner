import { api } from './api';

export const WorkoutApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: () => `/workouts/`,
      providesTags: ['Workout'],
    }),
    createWorkout: builder.mutation({
      query: ( body ) => ({
        url: `/workouts/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Workout'],
    }),
    updateWorkout: builder.mutation({
      query: ({ id, body }) => ({
        url: `/workouts/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Workout'],
    }),
    deleteWorkout: builder.mutation({
      query: (id) => ({
        url: `/workouts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Workout'],
    }),
  }),
});

export const {
  useGetWorkoutsQuery,
  useCreateWorkoutMutation,
  useUpdateWorkoutMutation,
  useDeleteWorkoutMutation,
} = WorkoutApi;
