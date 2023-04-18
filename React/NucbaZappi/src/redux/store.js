import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cartSlice';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import recommendedReducer from './recommended/recommendedSlice';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recommendedReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
