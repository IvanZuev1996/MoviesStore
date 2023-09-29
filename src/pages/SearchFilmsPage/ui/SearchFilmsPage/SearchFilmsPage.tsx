import {
    fetchFilmsBySearch,
    Film,
    FilmList,
    TextPosition
} from 'entities/Film';
import { searchFilmsPageActions } from 'pages/SearchFilmsPage/model/slice/searchFilmsPageSlice';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextSize } from 'shared/ui/Text/Text';
import NotFoundImage from 'shared/assets/icons/not-found-icon.png';
import { ImageCard } from 'shared/ui/ImageCard/ImageCard';
import {
    getError,
    getFilms,
    getIsLoading,
    getSearch
} from '../../model/selectors/searchFilmsPageSelectors';
import { SearchFilmsForm } from '../SearchFilmsForm/SearchFilmsForm';
import cls from './SearchFilmsPage.module.scss';

interface SearchFilmsPageProps {
    className?: string;
}

const SearchFilmsPage = ({ className }: SearchFilmsPageProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getIsLoading);
    const films = useSelector(getFilms);
    const error = useSelector(getError);
    const search = useSelector(getSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchFilmsBySearch());
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 800);

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(searchFilmsPageActions.setSearch(search));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    const renderList = useCallback(
        (films: Film[] | undefined) => {
            if (!search) {
                return (
                    <div className={cls.NoSearch}>
                        <Text text="Введите поисковый запрос для отображения результатов..." />
                    </div>
                );
            }

            if (error || !films) {
                return (
                    <Page>
                        <Text text="Таких фильмов у нас нет..." />
                    </Page>
                );
            }

            if (films.length <= 0) {
                return (
                    <div className={cls.notFoundFilmWrapper}>
                        <ImageCard
                            height={100}
                            width={100}
                            src={NotFoundImage}
                        />
                        <Text
                            text="Фильмы не найдены"
                            size={TextSize.M}
                            className={cls.noFilms}
                        />
                    </div>
                );
            }

            return (
                <FilmList
                    films={films}
                    isLoading={isLoading}
                    textPosition={TextPosition.RIGHT}
                    className={cls.filmsList}
                    timeout={0}
                />
            );
        },
        [error, isLoading, search]
    );

    return (
        <Page className={classNames(cls.SearchFilmsPage, {}, [className])}>
            <SearchFilmsForm onChange={onChangeSearch} value={search} />
            {renderList(films)}
        </Page>
    );
};

export default memo(SearchFilmsPage);
