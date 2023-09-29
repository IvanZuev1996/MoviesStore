import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoading = (state: StateSchema) => state.mainPage.isLoading;
export const getError = (state: StateSchema) => state.mainPage.error;
export const getFilms = (state: StateSchema) => state.mainPage.films;
export const getInited = (state: StateSchema) => state.mainPage._inited;
