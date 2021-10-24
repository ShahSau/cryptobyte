// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoEventsHeaders = {
//     'x-rapidapi-host': 'coinpaprika1.p.rapidapi.com',
//     'x-rapidapi-key': '09cfa80fdfmshfab9bb2e6524034p10409ejsn8327b13fb216'
// };

// const baseUrl = "https://coinpaprika1.p.rapidapi.com/coins"

// const createRequest = (url) => ({ url, headers: cryptoEventsHeaders });

// export const cryptoEventsApi = createApi({
//     reducerPath: "cryptoEventsApi",
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//       getCryptoEvents: builder.query({
//         query: () =>
//           createRequest(
//             "/btc-bitcoin/events"
//           ),
//       }),
//     }),
//   });
//   export const { useGetCryptoEventsQuery } = cryptoEventsApi;
