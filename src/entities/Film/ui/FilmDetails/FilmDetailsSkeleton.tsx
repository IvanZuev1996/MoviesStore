import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './FilmDetails.module.scss';

interface FilmDetailsProps {
    className?: string;
}

const FilmDetailsSkeleton = ({ className }: FilmDetailsProps) => (
    <div className={classNames(cls.FilmDetails, {}, [className])}>
        <Skeleton
            width={270}
            height={390}
            border="20px"
            className={cls.image}
        />
        <div className={cls.infoWrapper}>
            <div className={cls.infoHeader}>
                <Skeleton
                    width={120}
                    height={40}
                    border="4px"
                    className={cls.filmName}
                />
                <Skeleton width={150} height={50} border="10px" />
            </div>
            <Skeleton width="100%" height="70%" border="10px" />
        </div>
    </div>
);

export default memo(FilmDetailsSkeleton);
