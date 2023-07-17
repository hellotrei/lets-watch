
import { RouteStructureProps } from '../../../../routes';
import ContactUs from '../pages/ContactUs';

export enum ContactUsRoutePaths {
    ContactUs = '/contact-us',
}
export const contactUsModuleRoutes: Array<RouteStructureProps> = [
    {
        path: ContactUsRoutePaths.ContactUs,
        key: 'CONTACT_US',
        exact: true,
        component: ContactUs,
    },
];
