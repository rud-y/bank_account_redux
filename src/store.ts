import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = configureStore({
 reducer: rootReducer,
});

// const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export default store;
