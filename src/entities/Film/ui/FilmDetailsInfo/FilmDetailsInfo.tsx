import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { TextSize, Text } from 'shared/ui/Text/Text';
import cls from './FilmDetailsInfo.module.scss';

interface FilmDetailsInfoProps {
    className?: string;
    infokey: string;
    value: string;
}

export const FilmDetailsInfo = memo(
    ({ className, infokey, value }: FilmDetailsInfoProps) => (
        <div className={classNames(cls.FilmDetailsInfo, {}, [className])}>
            <Text text={infokey} size={TextSize.M} className={cls.infoKey} />
            <Text
                text={value}
                size={TextSize.S}
                className={cls.infoValue}
                isHTML
            />
        </div>
    )
);
