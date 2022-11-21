import { configureStore } from '@reduxjs/toolkit'

import playerReducer from './features/playerFilter'
import { shazamCoreApi } from './services/shazamservice'

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
})
