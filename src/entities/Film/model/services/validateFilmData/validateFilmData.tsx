import { FilmCountry } from '../../types/film';

export const validateFilmData = () => {
    const renderCountry = (network: FilmCountry) => {
        if (network !== null && network && network.country) {
            return network.country.name;
        }

        return '';
    };

    const renderPremiered = (value: string) => {
        if (value !== null && value) {
            return value;
        }
        return '';
    };

    const renderImage = (image: string | undefined) => {
        if (image !== null && image) {
            return image;
        }
        return 'https://www.solidbackgrounds.com/images/1366x768/1366x768-jet-solid-color-background.jpg';
    };

    const renderTextInfo = (text: string | undefined) => {
        if (text !== null && text) {
            return text;
        }
        return 'Неизвестно';
    };

    const renderGenres = (genres: string[]) => {
        if (genres !== null && genres.length) {
            return genres.join(', ');
        }
        return '';
    };

    return {
        renderCountry,
        renderGenres,
        renderImage,
        renderTextInfo,
        renderPremiered
    };
};
