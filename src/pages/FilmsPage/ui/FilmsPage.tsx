import {
    fetchFilmsByCategory,
    Film,
    FilmList,
    TextPosition
} from 'entities/Film';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDelay } from 'shared/lib/hooks/useDelay/useDelay';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    getData,
    getError,
    getInited,
    getIsLoading
} from '../model/selectors/filmsPageSelectors';
import cls from './FilmsPage.module.scss';

interface FilmsPageProps {
    className?: string;
}

const FilmsPage = ({ className }: FilmsPageProps) => {
    const dispatch = useAppDispatch();
    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading);
    const data = useSelector(getData);
    const inited = useSelector(getInited);
    const delayIsLoading = useDelay(isLoading);

    useEffect(() => {
        if (!inited) {
            dispatch(fetchFilmsByCategory('horror'));
        }
    }, [dispatch, inited]);

    if (!data || error) {
        return <Text text="Фильмы не найдены" />;
    }

    const films: Film[] = [...data.map((item) => ({ show: item }))];

    return (
        <Page className={classNames(cls.FilmsPage, {}, [className])}>
            <Text
                text="Выбранная категория: Horror"
                size={TextSize.L}
                className={cls.text}
            />
            <FilmList
                textPosition={TextPosition.RIGHT}
                films={films}
                isLoading={delayIsLoading}
            />
        </Page>
    );
};

export default memo(FilmsPage);
