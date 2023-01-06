import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "LZPokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home', 
                component: () => import(/* webpackChunkName: "LZListPage" */ '../modules/pokemon/pages/ListPage')
            },
            {
                path: 'about', 
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "LZLAboutPage" */ '../modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "LZPokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
                props: (route) => {
                    const id = Number(route.params.id);
                    return isNaN(id) ? {id: 1} : {id}
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            }
        ]
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