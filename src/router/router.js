import {createRouter, createWebHashHistory} from 'vue-router'

import AboutPage from '../modules/pokemon/pages/AboutPage'
import ListPage from '../modules/pokemon/pages/ListPage'
import PokemonPage from '../modules/pokemon/pages/PokemonPage'

const routes = [
    {path: '/', component: ListPage},
    {path: '/About', component: AboutPage},
    {path: '/id', component: PokemonPage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router