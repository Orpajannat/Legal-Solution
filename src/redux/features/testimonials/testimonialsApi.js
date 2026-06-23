import baseApi from "../../baseApi";

export const testimonialsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTestimonials: builder.query({
            query: () => ({
                url: "/testimonials",
                method: "GET",
            }),
            providesTags: ["Testimonials"],
            transformResponse: (response) => response?.data || [],
        }),
    }),
});

export const { useGetTestimonialsQuery } = testimonialsApi;