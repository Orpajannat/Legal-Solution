import baseApi from "../../baseApi";

export const faqApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFaqs: builder.query({
            query: () => ({
                url: "/faqs",
                method: "GET",
            }),
            providesTags: ["Faqs"],
            transformResponse: (response) => response?.data || [],
        }),
    }),
});

export const { useGetFaqsQuery } = faqApi;
