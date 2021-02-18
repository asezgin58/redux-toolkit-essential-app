import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices';

export const store = configureStore({
    reducer: rootReducer
});

declare global {
    type IStore = ReturnType<typeof store.getState>;
    type IDispatch = typeof store.dispatch;
}