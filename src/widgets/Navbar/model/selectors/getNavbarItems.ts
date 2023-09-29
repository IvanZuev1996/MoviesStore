import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { NavbarItemType } from '../types/navbar';

export const navbarItems: NavbarItemType[] = [
    {
        text: 'Главная',
        path: RoutePath.main
    },
    {
        text: 'Фильмы',
        path: RoutePath.films
    },
    {
        text: 'О нас',
        path: RoutePath.about
    },
    {
        text: 'Поиск',
        path: RoutePath.search
    }
];
