import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { navbarItems } from '../../model/selectors/getNavbarItems';
import { NavbarItemType } from '../../model/types/navbar';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <header className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.navbarWrapper}>
            <AppLink to={RoutePath.main} className={cls.Logo}>
                KinoStore
            </AppLink>
            <div>
                {navbarItems.map((item: NavbarItemType) => (
                    <NavbarItem to={item.path} key={item.path}>
                        {item.text}
                    </NavbarItem>
                ))}
            </div>
        </div>
    </header>
);
