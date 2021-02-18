import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser as User, initialUsersData} from "./type";

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsersData,
    reducers: {
        setStoreUsers: (state: User[], action: PayloadAction<User[]>): User[] => action.payload,
        deleteStoreUser: (state: IUser[], action: PayloadAction<number>): IUser[] => {
            const filterList: IUser[] = [...state];
            filterList.splice(filterList.findIndex((item: IUser) => item.id === action.payload), 1);
            return filterList;
        }
    }
});

// Type export
export type IUser = User;

// Value export
export const usersValue = (state: IStore): IUser[] => state.users;

// Actions exports
export const {setStoreUsers, deleteStoreUser} = usersSlice.actions;

// Reducer export
export default usersSlice.reducer;