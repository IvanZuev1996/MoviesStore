import { AboutPage } from 'pages/AboutPage';
import { FilmDetailsPage } from 'pages/FilmsDetailsPage';
import { FilmsPage } from 'pages/FilmsPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { SearchFilmsPage } from 'pages/SearchFilmsPage';
import { RouteProps } from 'react-router-dom';

type AppRouteProps = RouteProps;

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    FILMS = 'films',
    SEARCH = 'search',
    FILM_DETAILS = 'film_details',

    // notFoundRoute
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.FILMS]: '/films',
    [AppRoutes.FILM_DETAILS]: '/films/', // + id
    [AppRoutes.SEARCH]: '/search',

    // notFoundPath
    [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.FILMS]: {
        path: RoutePath.films,
        element: <FilmsPage />
    },
    [AppRoutes.FILM_DETAILS]: {
        path: `${RoutePath.film_details}:id`,
        element: <FilmDetailsPage />
    },
    [AppRoutes.SEARCH]: {
        path: RoutePath.search,
        element: <SearchFilmsPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
