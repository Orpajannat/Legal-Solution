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

        sendMessage: builder.mutation({
            query: (formData) => ({
                url: "/messages",
                method: "POST",
                body: formData,  
            }),
        }),

    }),
});

export const { useGetContactQuery, useSendMessageMutation } = contactApi;