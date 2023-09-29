import { lazy } from 'react';

export const FilmDetailsPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore - Исключительно для теста имитации загрузки
            setTimeout(() => resolve(import('./FilmDetailsPage')), 800);
        })
);
