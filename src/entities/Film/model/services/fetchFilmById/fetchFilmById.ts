import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { ShowDetails } from '../../types/film';

export const fetchFilmById = createAsyncThunk<
    ShowDetails,
    string,
    ThunkConfig<string>
>('filmList/fetchFilmById', async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<ShowDetails>(`/shows/${id}`);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
