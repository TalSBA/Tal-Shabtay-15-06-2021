import Home from './components/Home.vue';
import Favorites from './components/Favorites.vue'

export const routes = [
    { path: `/home`, name: 'home', component: Home },
    { path: `/favorites`, name: 'favorites', component: Favorites },
    { path: `/`, name: 'root', component: Home }
];