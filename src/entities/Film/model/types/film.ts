interface FilmImage {
    original: string;
    medium?: string;
}

export interface FilmCountry {
    country?: { name: string };
}

interface FilmRating {
    average: number;
}

export interface ShowDetails {
    id: number;
    name: string;
    image: FilmImage;
    language: string;
    premiered: string;
    genres: string[];
    network: FilmCountry;
    rating: FilmRating;
    summary: string;
}

export interface Film {
    show: ShowDetails;
}
