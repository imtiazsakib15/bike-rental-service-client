import { baseApi } from "@/redux/api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (query: Record<string, string>) => ({
        url: query ? `/bikes?${new URLSearchParams(query)}` : "/bikes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBikesQuery } = bikeApi;
