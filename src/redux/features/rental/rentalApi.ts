import { baseApi } from "@/redux/api/baseApi";

const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRental: builder.mutation({
      query: (rentalData) => ({
        url: "/rentals",
        method: "POST",
        body: rentalData,
      }),
      invalidatesTags: ["Rentals"],
    }),
    getAllRentals: builder.query({
      query: () => ({
        url: "/rentals/all",
        method: "GET",
      }),
      providesTags: ["Rentals"],
    }),
  }),
});

export const { useCreateRentalMutation, useGetAllRentalsQuery } = rentalApi;
