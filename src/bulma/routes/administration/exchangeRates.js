import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./exchangeRates', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'exchangeRates',
    component: RouterView,
    meta: {
        breadcrumb: 'echange rates',
        route: 'administration.exchangeRates.index',
    },
    children: routes,
};
