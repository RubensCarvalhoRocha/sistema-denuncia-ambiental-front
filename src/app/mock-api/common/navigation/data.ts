/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const compactNavigation: FuseNavigationItem[] = [

    {
        id: 'analisar',
        title: 'Analisar Denúncias',
        type: 'basic',
        icon: 'dashboard',
        link: '/',
    },

    {
        id: 'consultar',
        title: 'Consultar Denúncias',
        type: 'basic',
        icon: 'assignment',
        link: '/consultar',
    },
];
export const defaultNavigation: FuseNavigationItem[] = compactNavigation;
export const futuristicNavigation: FuseNavigationItem[] = compactNavigation;
export const horizontalNavigation: FuseNavigationItem[] = compactNavigation;
