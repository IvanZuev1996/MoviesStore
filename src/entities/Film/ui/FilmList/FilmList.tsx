import { Film } from 'entities/Film';
import { memo, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { CSSTransition } from 'react-transition-group';
import { FilmListItem, TextPosition } from '../FilmListItem/FilmListItem';
import { FilmListSceletonItem } from '../FilmListItem/FilmListSkeletonItem';
import cls from './FilmList.module.scss';
import './FilmListAnimation.css';

interface FilmListProps {
    className?: string;
    textPosition?: TextPosition;
    films: Film[];
    isLoading?: boolean;
    timeout?: number;
}

export const FilmList = memo((props: FilmListProps) => {
    const {
        className,
        films,
        isLoading,
        timeout = 200,
        textPosition = TextPosition.BOTTOM
    } = props;
    const [animationLoading, setAnimationLoading] = useState<boolean>(false);

    const getSkeletons = () =>
        new Array(textPosition === TextPosition.BOTTOM ? 10 : 15)
            .fill(0)
            .map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <FilmListSceletonItem textPosition={textPosition} key={index} />
            ));

    if (timeout) {
        return (
            <div
                className={classNames(cls.FilmList, {}, [
                    className,
                    cls[textPosition]
                ])}
            >
                <CSSTransition
                    in={isLoading}
                    timeout={100}
                    classNames="skeletons-animation"
                    key="skeletons"
                    onExited={() => setAnimationLoading(true)}
                    unmountOnExit
                >
                    <div
                        className={classNames(cls.FilmList, {}, [
                            className,
                            cls[textPosition]
                        ])}
                    >
                        {getSkeletons()}
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={animationLoading}
                    timeout={timeout}
                    classNames="films-animation"
                    key="films"
                >
                    <div className={cls[textPosition]}>
                        {animationLoading &&
                            films.map((item) => (
                                <FilmListItem
                                    textPosition={textPosition}
                                    film={item}
                                    key={item.show.id}
                                />
                            ))}
                    </div>
                </CSSTransition>
            </div>
        );
    }

    if (isLoading) {
        <div
            className={classNames(cls.FilmList, {}, [
                className,
                cls[textPosition]
            ])}
        >
            {getSkeletons()}
        </div>;
    }

    return (
        <div
            className={classNames(cls.FilmList, {}, [
                className,
                cls[textPosition]
            ])}
        >
            {films.map((item) => (
                <FilmListItem
                    textPosition={textPosition}
                    film={item}
                    key={item.show.id}
                />
            ))}
        </div>
    );
});
