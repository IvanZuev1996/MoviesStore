import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilmsBySearch, Film } from 'entities/Film';
import { SearchFilmsPageSchema } from '../types/searchFilmsPageSchema';

const initialState: SearchFilmsPageSchema = {
    error: undefined,
    films: [],
    isLoading: false,
    search: ''
};

const searchFilmsPageSlice = createSlice({
    name: 'searchFilmsPageSlice',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmsBySearch.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchFilmsBySearch.fulfilled,
                (state, action: PayloadAction<Film[]>) => {
                    state.films = action.payload;
                    state.isLoading = false;
                }
            )
            .addCase(fetchFilmsBySearch.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: searchFilmsPageActions } = searchFilmsPageSlice;
export const { reducer: searchFilmsPageReducer } = searchFilmsPageSlice;
