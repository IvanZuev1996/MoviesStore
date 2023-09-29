import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoading = (state: StateSchema) => state.filmsPage.isLoading;
export const getError = (state: StateSchema) => state.filmsPage.error;
export const getData = (state: StateSchema) => state.filmsPage.data;
export const getInited = (state: StateSchema) => state.filmsPage._inited;
