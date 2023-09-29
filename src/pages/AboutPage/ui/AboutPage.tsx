import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { ImageCard } from 'shared/ui/ImageCard/ImageCard';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { summary } from 'shared/const/aboutPage';
import cls from './AboutPage.module.scss';
import 'index.css';

interface AboutPageProps {
    className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => (
    <Page className={classNames(cls.AboutPage, {}, [className])}>
        <div className={cls.Wrapper}>
            <ImageCard
                src="https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/movies/frames/6046395-844312.jpg"
                alt="mainImage"
                height={270}
                width={400}
            />
            <div className={cls.infoWrapper}>
                <Text
                    text="KinoStore"
                    size={TextSize.L}
                    className={cls.mainTitle}
                />
                <Text text={summary} size={TextSize.M} />
            </div>
        </div>
    </Page>
);

export default memo(AboutPage);
