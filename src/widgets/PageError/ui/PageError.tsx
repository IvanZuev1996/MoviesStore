import { classNames } from 'shared/lib/helpers/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>Произошла непредвиденная ошибка</p>
            <button type="button" onClick={reloadPage} className={cls.button}>
                Обновить страницу
            </button>
        </div>
    );
};
