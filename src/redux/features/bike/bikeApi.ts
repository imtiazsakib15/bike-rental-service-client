import { baseApi } from "@/redux/api/baseApi";
import { TBike } from "@/types";

type BikeResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TBike[] | TBike;
};

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query<
      BikeResponse,
      Record<string, string | number | boolean> | void
    >({
      query: (query?: Record<string, string>) => {
        const queryParams = new URLSearchParams();
        if (query) {
          Object.entries(query).forEach(([key, value]) => {
            if (value) queryParams.set(key, value.toString());
          });
        }

        return {
          url: query ? `/bikes?${queryParams}` : "/bikes",
          method: "GET",
        };
      },
      providesTags: ["Bikes"],
    }),

    getABike: builder.query<BikeResponse, string>({
      query: (id: string) => ({
        url: `/bikes/${id}`,
        method: "GET",
      }),
      providesTags: ["Bikes"],
    }),

    getTotalBikeNumber: builder.query({
      query: () => ({
        url: "/bikes/total-bike-number",
        method: "GET",
      }),
    }),

    addBike: builder.mutation<BikeResponse, Partial<TBike>>({
      query: (bike) => ({
        url: "/bikes",
        method: "POST",
        body: bike,
      }),
      invalidatesTags: ["Bikes"],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useGetABikeQuery,
  useGetTotalBikeNumberQuery,
  useAddBikeMutation,
} = bikeApi;
