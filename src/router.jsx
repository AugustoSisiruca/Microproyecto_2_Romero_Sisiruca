import { createBrowserRouter } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import RegisterGoogle from './pages/RegisterGoogle'
import PerfilPage from './pages/PerfilPage';
import OptionRegister from './pages/OptionRegister'



export const router = createBrowserRouter([

{
    path: '/',
    element: <MenuPage></MenuPage>
},
{
    path: '/HomePage',
    element: <HomePage></HomePage>,
},

{
    path: '/login',
    element: <LoginPage></LoginPage>,
},
{
    path: '/RegistrarGoogle',
    element: <RegisterGoogle></RegisterGoogle>
},
{
    path: '/Registrar',
    element: <RegisterPage></RegisterPage>
},

{
    path: '/Usuario',
    element: <PerfilPage></PerfilPage>,
},

{
    path: '/OpcionRegistrar',
    element: <OptionRegister></OptionRegister>
},

]);