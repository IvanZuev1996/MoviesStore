import { lazy } from 'react';

export const MainPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore - исключительно для теста имитации загрузки
            setTimeout(() => resolve(import('./MainPage')), 800);
        })
);
