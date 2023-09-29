import { memo, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import cls from './NavbarItem.module.scss';

interface NavbarItemProps extends NavLinkProps {
    className?: string;
    children: ReactNode;
}

export const NavbarItem = memo(
    ({ className, to, children, ...otherProps }: NavbarItemProps) => (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? `${cls.link} ${cls.active}`
                    : `${cls.link} ${cls.normal}`
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    )
);
