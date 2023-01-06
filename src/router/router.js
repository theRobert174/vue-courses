import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/', 
        component: () => import(/* webpackChunkName: "LZListPage" */ '../modules/pokemon/pages/ListPage')
    },
    {
        path: '/about', 
        component: () => import(/* webpackChunkName: "LZLAboutPage" */ '../modules/pokemon/pages/AboutPage')
    },
    {
        path: '/:id', 
        name: 'pokemon-id',
        component: () => import(/* webpackChunkName: "LZPokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
        props: (route) => {
            const id = Number(route.params.id);
            return isNaN(id) ? {id: 1} : {id}
        }
    },
    {
        path: '/:pathMath(.*)*', 
        component: () => import(/* webpackChunkName: "LZNoPage" */ '../modules/shared/pages/NoPageFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router