import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilmsByCategory, ShowDetails } from 'entities/Film';
import { FilmsPageSchema } from '../types/filmsPageSchema';

const initialState: FilmsPageSchema = {
    error: undefined,
    data: [],
    isLoading: false
};

const filmsPageSlice = createSlice({
    name: 'filmsPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmsByCategory.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchFilmsByCategory.fulfilled,
                (state, action: PayloadAction<ShowDetails[]>) => {
                    state.data = action.payload;
                    state.isLoading = false;
                    state._inited = true;
                }
            )
            .addCase(fetchFilmsByCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: filmsPageActions } = filmsPageSlice;
export const { reducer: filmsPageReducer } = filmsPageSlice;
