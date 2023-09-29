import { lazy } from 'react';

export const NotFoundPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore - Исключительно для теста имитации загрузки
            setTimeout(() => resolve(import('./NotFoundPage')), 800);
        })
);
