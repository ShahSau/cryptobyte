import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { cryptoTagApi } from "../services/cryptotagsApi";
import { cryptoMiningApi } from "../services/cryptoMiningApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoTagApi.reducerPath]: cryptoTagApi.reducer,
    [cryptoMiningApi.reducerPath]: cryptoMiningApi.reducer,
  },
});
