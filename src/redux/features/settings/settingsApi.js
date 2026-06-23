import baseApi from "../../baseApi";

export const settingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSettings: builder.query({
            query: () => ({
                url: "/settings",
                method: "GET",
            }),
            providesTags: ["Settings"],
            transformResponse: (response) => response?.data || null,
        }),


        sendSubscribe: builder.mutation({
            query: (subscribeData) => ({
                url: "/subscribers",
                method: "POST",
                body: subscribeData,
            }),
        }),
    }),
});

export const { useGetSettingsQuery, useSendSubscribeMutation } = settingsApi;
