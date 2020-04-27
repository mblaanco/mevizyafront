import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'mevizya',
      storage,
      whitelist: ['auth', 'user', 'list'],
    },
    reducers
  );
  return persistedReducer;
};
