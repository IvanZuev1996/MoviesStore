import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getSearch } from 'pages/SearchFilmsPage/model/selectors/searchFilmsPageSelectors';
import { Film } from '../../types/film';

export const fetchFilmsBySearch = createAsyncThunk<
    Film[],
    void,
    ThunkConfig<string>
>('filmList/fetchFilmsBySearch', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const search = getSearch(getState());

    try {
        const response = await extra.api.get<Film[]>('/search/shows', {
            params: {
                q: search
            }
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
