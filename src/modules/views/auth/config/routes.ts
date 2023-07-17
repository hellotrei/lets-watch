
import { RouteStructureProps } from '../../../../routes';
import Login from '../pages/Login';

export enum LoginRoutePaths {
    Login = '/login',
}
export const loginModuleRoutes: Array<RouteStructureProps> = [
    {
        path: LoginRoutePaths.Login,
        key: 'LOGIN',
        exact: true,
        component: Login,
    },
];
