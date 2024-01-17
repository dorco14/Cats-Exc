import { useCallback, useMemo, useState } from "react";
import type { TCat } from "../types/cat";
import { getCats, createCat } from "../services/cats/cat.service";
import constate from "constate";

const useCatsContext = () => {
    const [cats, setCats] = useState<TCat[]>([]);

    const fetchCats = useCallback(async (filter?: string, signal?: AbortSignal) => {
        try {
            const filteredCats = await getCats(filter,signal);
            setCats(filteredCats);
            return filteredCats;
        } catch (error) {
            console.log(error);
        }
    }, []);

    const addCat = useCallback(async (cat: TCat): Promise<void> => {
        try {
            await createCat(cat);
            setCats((prevCats) => [...prevCats, cat]);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const store = useMemo(() => {
        return {
            state: { cats },
            actions: { addCat, setCats, fetchCats }
        }
    }, [cats, addCat, setCats, fetchCats]);

    return store;
};

export const [CatsProvider, useCats] = constate(useCatsContext);