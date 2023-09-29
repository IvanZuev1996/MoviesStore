import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Loader } from '../Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <Loader className={classNames(cls.loader, {}, [className])} />
));
