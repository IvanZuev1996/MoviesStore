import { Film } from 'entities/Film';

export interface MainPageSchema {
    films?: Film[];
    isLoading?: boolean;
    error?: string;

    _inited?: boolean;
}
