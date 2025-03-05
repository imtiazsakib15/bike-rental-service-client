import { baseApi } from "@/redux/api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (query?: Record<string, string>) => ({
        url: query ? `/bikes?${new URLSearchParams(query)}` : "/bikes",
        method: "GET",
      }),
    }),
    getABike: builder.query({
      query: (id: string) => ({
        url: `/bikes/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBikesQuery, useGetABikeQuery } = bikeApi;
