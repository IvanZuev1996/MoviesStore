import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Film } from '../../types/film';

export const fetchFilmsByQuery = createAsyncThunk<
    Film[],
    string,
    ThunkConfig<string>
>('filmList/fetchFilmsByQuery', async (query, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Film[]>('/search/shows', {
            params: {
                q: query
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
