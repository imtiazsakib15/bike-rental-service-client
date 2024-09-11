import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-rental-service-server-eight.vercel.app",
  }),
  endpoints: () => ({}),
});

// export const {} = baseApi;
