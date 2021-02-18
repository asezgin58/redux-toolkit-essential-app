import {configureStore} from '@reduxjs/toolkit';
import reducers from './slices';

export const store = configureStore({
    reducer: reducers
});

declare global {
    type IStore = ReturnType<typeof store.getState>;
    type IDispatch = typeof store.dispatch;
}