import axios, { Axios } from 'axios';
import { TCat } from '../../types/cat';

const catAxios: Axios = axios.create({
    baseURL: 'http://localhost:4000/cats',
});

export const getCats = async (filter?: string, signal?: AbortSignal): Promise<TCat[]> => {
    try {
        const { data } = await catAxios.get('', { signal, params: { name: filter } });
        return data;

    } catch (error) {
        console.error('Error fetching cats:', error);
        throw error;
    }
};

export const createCat = async (cat: TCat): Promise<void> => {
    try {
        await catAxios.post('', cat);
    } catch (error) {
        console.error('Error creating cat:', error);
        throw error;
    }
};