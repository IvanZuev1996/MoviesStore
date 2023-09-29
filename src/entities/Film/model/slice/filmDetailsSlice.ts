import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilmsByQuery, Film } from 'entities/Film';
import { fetchFilmById } from '../services/fetchFilmById/fetchFilmById';
import { ShowDetails } from '../types/film';
import { FilmDetailsSchema } from '../types/filmDetailsSchema';

const initialState: FilmDetailsSchema = {
    error: undefined,
    data: undefined,
    isLoading: false
};

const filmDetailsSlice = createSlice({
    name: 'filmDetailsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmById.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchFilmById.fulfilled,
                (state, action: PayloadAction<ShowDetails>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(fetchFilmById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: filmDetailsActions } = filmDetailsSlice;
export const { reducer: filmDetailsReducer } = filmDetailsSlice;
