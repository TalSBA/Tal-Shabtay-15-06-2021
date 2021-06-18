const state = {
    favorites: [],
    selectedFavorite: null
}

const mutations = {
    'ADD_TO_FAVORITES'(state, city) {
        if (!state.favorites) {
            state.favorites = [];
        }
        state.favorites.push(city);
    },
    'DELETE_FROM_FAVORITES'(state, city) {
        state.favorites.splice(state.favorites.indexOf(city), 1);
    },
    'SET_SELECTED_FAVORITE'(state, city){
        state.selectedFavorite = city;
    }
}


const actions = {
    addTofavorites({ commit }, city) {
        commit('ADD_TO_FAVORITES', city);
    },
    deleteFromFavorites({ commit }, city) {
        commit('DELETE_FROM_FAVORITES', city);
    },
    setSelectedFavorite({ commit }, city) {
        commit('SET_SELECTED_FAVORITE', city);
    }
};

const getters = {
    favorites: state => {
        return state.favorites;
    },
    selectedFavorite: state =>{
        return state.selectedFavorite;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};