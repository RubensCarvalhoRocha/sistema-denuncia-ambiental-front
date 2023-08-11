/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const compactNavigation: FuseNavigationItem[] = [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'dashboard',
        link: '/dashboard',
    },
    {
        id: 'filmes',
        title: 'Filmes',
        type: 'aside',
        icon: 'assignment',
        link: '',
        children: [

            {
                id: 'filmesGerais',
                title: 'Gerais',
                type: 'basic',
                link: '/gerais',
            },
            {
                id: 'filmesDrama',
                title: 'Drama',
                type: 'basic',
                link: '/drama',
            },

            {
                id: 'filmesComedia',
                title: 'Comedia',
                type: 'basic',
                link: '/comedia',
            },
        ],
    },

    {
        id: 'series',
        title: 'Series',
        type: 'aside',
        icon: 'assignment',
        link: '/',
        children: [
            {
                id: 'seriesDrama',
                title: 'Drama',
                type: 'basic',
                link: '/admin/usuario',
            },

            {
                id: 'seriesComedia',
                title: 'Comedia',
                type: 'basic',
                link: '/',
            },
        ],
    },
];
export const defaultNavigation: FuseNavigationItem[] = compactNavigation;
export const futuristicNavigation: FuseNavigationItem[] = compactNavigation;
export const horizontalNavigation: FuseNavigationItem[] = compactNavigation;
