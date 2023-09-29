export { FilmList } from './ui/FilmList/FilmList';
export { TextPosition } from './ui/FilmListItem/FilmListItem';
export type { Film, ShowDetails } from './model/types/film';
export type { FilmDetailsSchema } from './model/types/filmDetailsSchema';
export { fetchFilmsByQuery } from './model/services/fetchFilmsByQuery/fetchFilmsByQuery';
export { fetchFilmsBySearch } from './model/services/fetchFilmsBySearch/fetchFilmsBySearch';
export { fetchFilmsByCategory } from './model/services/fetchFilmsByCategory/fetchFilmsByCategory';
export {
    filmDetailsActions,
    filmDetailsReducer
} from './model/slice/filmDetailsSlice';
export { FilmDetails } from './ui/FilmDetails/FilmDetails';
