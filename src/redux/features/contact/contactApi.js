import baseApi from "../../baseApi";

export const contactApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getContact: builder.query({
            query: () => ({
                url: "/contact",
                method: "GET",
            }),
            providesTags: ["Contact"],
            transformResponse: (response) => response?.data || [],
        }),
    }),
});

export const { useGetContactQuery } = contactApi;