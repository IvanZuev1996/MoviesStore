import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoading = (state: StateSchema) => state.filmDetails.isLoading;
export const getError = (state: StateSchema) => state.filmDetails.error;
export const getData = (state: StateSchema) => state.filmDetails.data;
