import { api } from "./api";

export const SetApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSets: builder.query({
      query: (exerciseId) => `/sets/${exerciseId}`,
      providesTags: ["Set"],
    }),
    getTodaysSets: builder.query({
      query: (exerciseId) => `/sets/${exerciseId}/today`,
    }),
    createSet: builder.mutation({
      query: (body) => ({
        url: `/sets/`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Set"],
    }),
    updateSet: builder.mutation({
      query: ({ id, body }) => ({
        url: `/sets/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Set"],
    }),
    deleteSet: builder.mutation({
      query: (id) => ({
        url: `/sets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Set"],
    }),
  }),
});

export const {
  useGetSetsQuery,
  useCreateSetMutation,
  useUpdateSetMutation,
  useDeleteSetMutation,
  useGetTodaysSetsQuery,
} = SetApi;
