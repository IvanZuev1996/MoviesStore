import { ShowDetails } from './film';

export interface FilmDetailsSchema {
    data?: ShowDetails;
    isLoading?: boolean;
    error?: string;
}
