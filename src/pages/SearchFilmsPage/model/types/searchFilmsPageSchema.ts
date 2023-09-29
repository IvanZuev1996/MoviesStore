import { Film } from 'entities/Film';

export interface SearchFilmsPageSchema {
    isLoading?: boolean;
    films?: Film[];
    error?: string;
    search?: string;
}
