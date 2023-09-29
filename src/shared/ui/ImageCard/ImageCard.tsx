import { CSSProperties } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './ImageCard.module.scss';

interface ImageCardProps {
    className?: string;
    src: string;
    width?: number | string;
    height?: number | string;
    alt?: string;
}

export const ImageCard = (props: ImageCardProps) => {
    const { className, src, alt, height, width } = props;
    const imageStyle: CSSProperties = {
        width,
        height
    };

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.image, {}, [className])}
            style={imageStyle}
        />
    );
};
