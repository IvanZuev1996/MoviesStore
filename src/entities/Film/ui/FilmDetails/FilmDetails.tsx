import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ImageCard } from 'shared/ui/ImageCard/ImageCard';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useDelay } from 'shared/lib/hooks/useDelay/useDelay';
import { Rating } from '../../../Rating';
import { fetchFilmById } from '../../model/services/fetchFilmById/fetchFilmById';
import {
    getData,
    getError,
    getIsLoading
} from '../../model/selectors/filmDetails';
import { FilmDetailsInfo } from '../FilmDetailsInfo/FilmDetailsInfo';
import cls from './FilmDetails.module.scss';
import FilmDetailsSkeleton from './FilmDetailsSkeleton';
import { validateFilmData } from '../../model/services/validateFilmData/validateFilmData';

interface FilmDetailsProps {
    className?: string;
    id: string;
}

export const FilmDetails = memo(({ className, id }: FilmDetailsProps) => {
    const dispatch = useAppDispatch();
    const data = useSelector(getData);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const delayIsLoading = useDelay(isLoading);

    const {
        renderCountry,
        renderGenres,
        renderImage,
        renderTextInfo,
        renderPremiered
    } = validateFilmData();

    useEffect(() => {
        dispatch(fetchFilmById(id));
    }, [dispatch, id]);

    if (delayIsLoading) {
        return <FilmDetailsSkeleton />;
    }

    if (!data || error) {
        return <Text text="Фильм не найден" />;
    }

    return (
        <div className={classNames(cls.FilmDetails, {}, [className])}>
            <ImageCard
                src={renderImage(data.image?.original)}
                className={cls.image}
            />
            <div className={cls.infoWrapper}>
                <div className={cls.infoHeader}>
                    <Text
                        text={renderTextInfo(data.name)}
                        size={TextSize.XL}
                        className={cls.filmName}
                    />
                    <Rating rating={data.rating?.average || 0} />
                </div>
                <FilmDetailsInfo
                    infokey="Год выхода:"
                    value={renderPremiered(data.premiered) || 'Неизвестно'}
                />
                <FilmDetailsInfo
                    infokey="Страна:"
                    value={renderCountry(data.network) || 'Неизвестно'}
                />
                <FilmDetailsInfo
                    infokey="Жанр:"
                    value={renderGenres(data.genres) || 'Неизвестно'}
                />
                <FilmDetailsInfo
                    infokey="Описание:"
                    value={data.summary || 'Неизвестно'}
                />
            </div>
        </div>
    );
});
