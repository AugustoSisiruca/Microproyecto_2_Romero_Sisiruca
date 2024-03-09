import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage';
import ParamsPage from './pages/ParamsPage';

export const router = createBrowserRouter([
{
    path: '/',
    element: <HomePage />,
},
{
    path: '/home/:id/:nombre',
    element: <ParamsPage />,
},
{
    path: '/login',
    // element: <LoginPage />,
    Component: LoginPage,
},
{
    path: '/user/profile',
    element: <div>Perfil de usuario</div>,
},
]);