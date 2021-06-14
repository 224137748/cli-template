import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// hot reload
// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer.js', () => {
//     const newRootReducer = require('./rootReducer').default;
//     store.replaceReducer(newRootReducer);
//   });
// }

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>
>;
