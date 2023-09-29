import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div className={classNames(cls['lds-dual-ring'], {}, [className])} />
));
