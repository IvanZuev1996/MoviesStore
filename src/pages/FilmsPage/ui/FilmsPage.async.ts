import { lazy } from 'react';

export const FilmsPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore - Исключительно для теста имитации загрузки
            setTimeout(() => resolve(import('./FilmsPage')), 800);
        })
);
