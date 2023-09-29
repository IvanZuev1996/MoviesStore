import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Film, ShowDetails } from '../../types/film';

export const fetchFilmsByCategory = createAsyncThunk<
    ShowDetails[],
    string,
    ThunkConfig<string>
>('filmList/fetchFilmsByCategory', async (category, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<ShowDetails[]>('/shows', {
            params: {
                q: category
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
