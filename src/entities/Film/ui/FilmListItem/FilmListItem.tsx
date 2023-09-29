import { Film } from 'entities/Film';
import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ImageCard } from 'shared/ui/ImageCard/ImageCard';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { validateFilmData } from '../../model/services/validateFilmData/validateFilmData';
import cls from './FilmListItem.module.scss';

export enum TextPosition {
    RIGHT = 'text_right',
    BOTTOM = 'text_bottom'
}

interface FilmListItemProps {
    className?: string;
    textPosition?: TextPosition;
    film: Film;
}

export const FilmListItem = memo((props: FilmListItemProps) => {
    const { className, film, textPosition = TextPosition.BOTTOM } = props;
    const {
        renderCountry,
        renderGenres,
        renderImage,
        renderTextInfo,
        renderPremiered
    } = validateFilmData();

    return (
        <AppLink
            to={`${RoutePath.film_details}${film.show.id}`}
            className={classNames(cls.FilmListItem, {}, [
                className,
                cls[textPosition]
            ])}
        >
            <ImageCard
                src={renderImage(film.show.image?.medium)}
                alt={film.show.name}
                className={cls.image}
            />
            <div className={cls.textWrapper}>
                <Text
                    text={renderTextInfo(film.show.name)}
                    size={TextSize.M}
                    className={cls.filmName}
                />
                <Text
                    text={renderCountry(film.show?.network)}
                    size={TextSize.S}
                />
                <Text
                    text={`${renderPremiered(
                        film.show?.premiered
                    )} ${renderGenres(film.show.genres)}`}
                    size={TextSize.S}
                />
            </div>
        </AppLink>
    );
});
