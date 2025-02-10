import { api } from "./api";

export const UserApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/user/me`,
      providesTags: ["User"],
    }),
    logoutUser: builder.query({
      query: () => `/user/logout`,
      invalidatesTags: ["User"],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: `/user/new`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `/user/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/user/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginUserMutation,
  useDeleteUserMutation,
  useRegisterUserMutation,
  useUpdateUserMutation,
  useLazyLogoutUserQuery,
} = UserApi;
