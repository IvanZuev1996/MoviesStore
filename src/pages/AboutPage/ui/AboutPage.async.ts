import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore - Исключительно для теста имитации загрузки
            setTimeout(() => resolve(import('./AboutPage')), 800);
        })
);
