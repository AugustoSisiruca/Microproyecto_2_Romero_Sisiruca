import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import PerfilPage from './pages/PerfilPage';




export const router = createBrowserRouter([
{
    path: '/',
    element: <HomePage></HomePage>,
},
{

},
{
    path: '/login',
    element: <LoginPage></LoginPage>,
},

{
    path: '/Registrar',
    element: <RegisterPage></RegisterPage>
},

{
    path: '/Usuario',
    element: <PerfilPage></PerfilPage>,
},
]);