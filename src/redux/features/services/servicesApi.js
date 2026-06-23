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

        getServiceBySlug: builder.query({
            query: (slug) => ({
                url: `/services/${slug}`,
                method: "GET",
            }),
            providesTags: ["Services"],
            transformResponse: (response) => response?.data || null,
        }),
    }),
});

export const { useGetServicesQuery, useGetServiceBySlugQuery } = servicesApi;