import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { filmDetailsReducer } from 'entities/Film';
import { filmsPageReducer } from 'pages/FilmsPage';
import { mainPageReducer } from 'pages/MainPage';
import { searchFilmsPageReducer } from 'pages/SearchFilmsPage';
import { $api } from 'shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        mainPage: mainPageReducer,
        filmDetails: filmDetailsReducer,
        filmsPage: filmsPageReducer,
        searchFilmsPage: searchFilmsPageReducer
    };

    const extraArg: ThunkExtraArg = {
        api: $api
    };

    const store = configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg
                }
            })
    });

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
