import { memo, ReactNode } from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { classNames } from 'shared/lib/helpers/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkColor {
    ACTIVE = 'active',
    NORMAL = 'normal'
}

export enum AppLinkTheme {
    CLEAR = 'clear',
    UNDERLINE = 'underline'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    color?: AppLinkColor;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        color = AppLinkColor.NORMAL,
        theme = AppLinkTheme.CLEAR,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [
                className,
                cls[theme],
                cls[color]
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
