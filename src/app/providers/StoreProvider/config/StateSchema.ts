import { AxiosInstance } from 'axios';
import { FilmDetailsSchema } from 'entities/Film';
import { FilmsPageSchema } from 'pages/FilmsPage';
import { MainPageSchema } from 'pages/MainPage';
import { SearchFilmsPageSchema } from 'pages/SearchFilmsPage';

export interface StateSchema {
    mainPage: MainPageSchema;
    filmDetails: FilmDetailsSchema;
    filmsPage: FilmsPageSchema;
    searchFilmsPage: SearchFilmsPageSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
