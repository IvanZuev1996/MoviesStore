import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ReactComponent as SearchIcon } from 'shared/assets/icons/search-icon.svg';
import cls from './SearchFilmsForm.module.scss';

interface SearchFilmsFormProps {
    className?: string;
    onChange?: (search: string) => void;
    value?: string;
}

export const SearchFilmsForm = memo(
    ({ className, onChange, value = '' }: SearchFilmsFormProps) => (
        <div className={classNames(cls.SearchFilmsForm, {}, [className])}>
            <Text
                text="Поиск по категории"
                size={TextSize.L}
                className={cls.text}
            />
            <div className={cls.inputWrapper}>
                <SearchIcon className={cls.searchIcon} />
                <Input
                    placeholder="Введите ваш запрос"
                    className={cls.input}
                    onChange={onChange}
                    value={value}
                />
            </div>
        </div>
    )
);
