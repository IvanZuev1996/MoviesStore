import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={classNames(cls.Input, {}, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            {...otherProps}
        />
    );
});
