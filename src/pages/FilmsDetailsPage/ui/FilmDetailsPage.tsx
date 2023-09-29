import { FilmDetails } from 'entities/Film';
import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames';
import { Page } from 'shared/ui/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import cls from './FilmDetailsPage.module.scss';

interface FilmsDetailsPageProps {
    className?: string;
}

type Params = 'id';

const FilmsDetailsPage = ({ className }: FilmsDetailsPageProps) => {
    const { id } = useParams<Params>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!id) {
        return <Text text="Произошла ошибка!" />;
    }

    return (
        <Page className={classNames(cls.FilmsDetailsPage, {}, [className])}>
            <FilmDetails id={id} />
        </Page>
    );
};

export default memo(FilmsDetailsPage);
