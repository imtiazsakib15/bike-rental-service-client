import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (query) => ({
        url: "/users",
        method: "GET",
        params: query,
      }),
      providesTags: ["Users"],
    }),

    updateUser: builder.mutation({
      query: ({ userId, role, isActive }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: { role, isActive },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserMutation } = userApi;
