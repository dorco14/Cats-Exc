import { createBrowserRouter } from 'react-router-dom';
import { CatList } from './components/CatsList';
import { AddCat } from './components/AddCat';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <CatList />
    },
    {
        path: '/add-cat',
        element: <AddCat />
    }
]);