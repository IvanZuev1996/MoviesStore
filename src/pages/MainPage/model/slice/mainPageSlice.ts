import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilmsByQuery, Film } from 'entities/Film';
import { MainPageSchema } from '../types/mainPageSchema';

const initialState: MainPageSchema = {
    error: undefined,
    films: [],
    isLoading: false
};

const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmsByQuery.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchFilmsByQuery.fulfilled,
                (state, action: PayloadAction<Film[]>) => {
                    state.films = action.payload;
                    state.isLoading = false;
                    state._inited = true;
                }
            )
            .addCase(fetchFilmsByQuery.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: mainPageActions } = mainPageSlice;
export const { reducer: mainPageReducer } = mainPageSlice;
