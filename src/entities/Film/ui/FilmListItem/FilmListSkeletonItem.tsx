import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './FilmListItem.module.scss';

export enum TextPosition {
    RIGHT = 'text_right',
    BOTTOM = 'text_bottom'
}

interface FilmListItemProps {
    className?: string;
    textPosition?: TextPosition;
}

export const FilmListSceletonItem = memo(
    ({ className, textPosition = TextPosition.BOTTOM }: FilmListItemProps) => (
        <div
            className={classNames(cls.FilmListItem, {}, [
                className,
                cls[textPosition]
            ])}
        >
            <Skeleton
                width={180}
                height={260}
                border="20px"
                className={`${cls.image} ${cls.imageSkeleton}`}
            />
            <div className={cls.textWrapper}>
                <Skeleton
                    width={100}
                    height={16}
                    className={cls.filmName}
                    border="4px"
                />
                <Skeleton width={140} height={16} border="4px" />
                <Skeleton width={120} height={16} border="4px" />
            </div>
        </div>
    )
);
