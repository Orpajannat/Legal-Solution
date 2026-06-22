import baseApi from "../../baseApi";

export const servicesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => ({
                url: "/services",
                method: "GET",
            }),
            providesTags: ["Services"],
            transformResponse: (response) => response?.data || [],
        }),
    }),
});

export const { useGetServicesQuery } = servicesApi;