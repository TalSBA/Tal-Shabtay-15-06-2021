import Home from './components/Home.vue';
import Favorites from './components/Favorites.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/favorites', component: Favorites }
];