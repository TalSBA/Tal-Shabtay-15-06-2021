import Vue from 'vue';
import Vuex from 'vuex';

import favorites from './modules/favorites';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        favorites
    }
});