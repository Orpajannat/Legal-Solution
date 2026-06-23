import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    tagTypes: ["Faqs", "Settings", "Contact", "Services", "Testimonials"],
    endpoints: () => ({}),
});

export default baseApi;
