import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer = memo(({ className }: FooterProps) => (
    <footer className={classNames(cls.Footer, {}, [className])}>
        <div className={cls.footerWrapper}>
            <Text text="KinoStore" className={cls.Logo} />
            <Text text="Дипломный проект" className={cls.projectText} />
            <div className={cls.userInfo}>
                <Text text="Made by" size={TextSize.S} />
                <Text text="Зуев Иван" />
            </div>
        </div>
    </footer>
));
