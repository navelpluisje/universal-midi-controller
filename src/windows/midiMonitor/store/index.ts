import { configureStore } from '@reduxjs/toolkit';
import { midiMessagesReducer } from './midiMessages';

export const store = configureStore({
  reducer: {
    midiMessages: midiMessagesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
