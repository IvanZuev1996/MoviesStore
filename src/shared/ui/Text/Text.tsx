import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import Parser from 'html-react-parser';
import cls from './Text.module.scss';

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export enum TextTheme {
    NORMAL = 'normal',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    text: string;
    size?: TextSize;
    theme?: TextTheme;
    isHTML?: boolean;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        isHTML = false,
        size = TextSize.M,
        theme = TextTheme.NORMAL
    } = props;

    return (
        <div
            className={classNames(cls.Text, {}, [
                className,
                cls[size],
                cls[theme]
            ])}
        >
            {isHTML ? Parser(text) : text}
        </div>
    );
});
