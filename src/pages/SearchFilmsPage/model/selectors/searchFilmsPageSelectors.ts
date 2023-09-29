import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoading = (state: StateSchema) =>
    state.searchFilmsPage.isLoading;

export const getError = (state: StateSchema) => state.searchFilmsPage.error;

export const getFilms = (state: StateSchema) => state.searchFilmsPage.films;

export const getSearch = (state: StateSchema) =>
    state.searchFilmsPage.search || '';
