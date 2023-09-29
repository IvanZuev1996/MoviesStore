import { classNames } from 'shared/lib/helpers/classNames';
import { ReactComponent as StarIcon } from 'shared/assets/icons/star-icon.svg';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import cls from './Rating.module.scss';

interface RatingProps {
    className?: string;
    rating: number;
}

export const Rating = memo(({ className, rating }: RatingProps) => (
    <div className={classNames(cls.Rating, {}, [className])}>
        <StarIcon className={cls.starIcon} />
        <Text
            text={`${rating}/10`}
            className={cls.raitingText}
            size={TextSize.L}
        />
    </div>
));
