import { fetchFilmsByQuery, FilmList, TextPosition } from 'entities/Film';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDelay } from 'shared/lib/hooks/useDelay/useDelay';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    getError,
    getFilms,
    getInited,
    getIsLoading
} from '../model/selectors/mainPageSelectors';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const inited = useSelector(getInited);
    const films = useSelector(getFilms);
    const delayIsLoading = useDelay(isLoading);

    useEffect(() => {
        if (!inited) {
            dispatch(fetchFilmsByQuery('robot'));
        }
    }, [dispatch, inited]);

    if (!films || error) {
        return <Text text="Фильмы не найдены" />;
    }

    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            <Text
                text="KinoStore"
                size={TextSize.XL}
                className={cls.logoTitle}
            />
            <Text
                text="Самый популярный портал о фильмах"
                size={TextSize.M}
                className={cls.logoText}
            />
            <FilmList
                textPosition={TextPosition.BOTTOM}
                films={films}
                isLoading={delayIsLoading}
            />
        </Page>
    );
};

export default memo(MainPage);
