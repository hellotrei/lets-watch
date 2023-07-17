import { loginModuleRoutes } from '../modules/views/auth/config/routes';
import { contactUsModuleRoutes } from '../modules/views/contact/config/routes';
import { myListModuleRoutes } from '../modules/views/favorite/config/routes';
import { moviesModuleRoute } from '../modules/views/movie/config/routes';
import { RenderRoutesProps } from './RenderRoutes';

export interface RouteStructureProps {
    path: string;
    key: string;
    exact: true;
    component: React.FC<RenderRoutesProps>;
    routes?: Array<RouteStructureProps>;
}

export const routes: Array<RouteStructureProps> = [
    ...moviesModuleRoute,
    ...myListModuleRoutes,
    ...contactUsModuleRoutes,
    ...loginModuleRoutes
];
