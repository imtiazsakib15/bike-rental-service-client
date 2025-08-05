import { baseApi } from "@/redux/api/baseApi";

const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRental: builder.mutation({
      query: (rentalData) => ({
        url: "/rentals",
        method: "POST",
        body: rentalData,
      }),
      invalidatesTags: ["Rentals", "Bikes"],
    }),
    getAllRentals: builder.query({
      query: (query?: Record<string, unknown>) => {
        const queryParams = new URLSearchParams();
        if (query) {
          Object.entries(query).forEach(([key, value]) => {
            if (value) queryParams.set(key, value.toString());
          });
        }
        return {
          url: query ? `/rentals/all?${queryParams}` : "/rentals/all",
          method: "GET",
        };
      },
      providesTags: ["Rentals"],
    }),
  }),
});

export const { useCreateRentalMutation, useGetAllRentalsQuery } = rentalApi;
