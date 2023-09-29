import { ShowDetails } from 'entities/Film';

export interface FilmsPageSchema {
    isLoading?: boolean;
    error?: string;
    data?: ShowDetails[];

    _inited?: boolean;
}
