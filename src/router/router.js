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
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "LZDragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters', 
                component: () => import(/* webpackChunkName: "LZcharacters" */ '../modules/dbz/pages/Characters')
            },
            {
                path: 'about', 
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "LZLAboutPage" */ '../modules/dbz/pages/About')
            },
            {
                path: '',
                redirect: { name: 'dbz-about' }
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

//Guard Global - Sincrono
// router.beforeEach((to, from, next) => {
//     console.log({to, from, next})

//     const random = Math.random()*100

//     if(random > 50){
//         console.log("Autenticado")
//         next()
//     }else{
//         console.log('bloqueado por el beforeEach Guard')
//         next({name: 'pokemon-home'})
//     }
// })

//Guard Asincrono

const canAccess = () => {
    return new Promise( resolve => {

        const random = Math.random()*100

        if(random > 50){
            console.log("Autenticado - canAccess")
            resolve(true)
        }else{
            console.log(random,'bloqueado por el beforeEach Guard - canAccess')
            resolve(false)
        }
    })
}

router.beforeEach( async(to, from, next) => {
    const autorized = await canAccess()

    autorized ? next() : next({name: 'pokemon-home'})
})


export default router