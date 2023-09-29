import { lazy } from 'react';

export const SearchFilmsPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore - Исключительно для теста имитации загрузки
            setTimeout(() => resolve(import('./SearchFilmsPage')), 800);
        })
);
