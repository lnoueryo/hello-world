export const state = () => ({
    window: null,
})

export const mutations = {
    resize(state, payload) {
        state.window = payload;
    },
}

export const actions = {
    resize({commit}, payload){
        commit('resize', payload);
    }
}

export const getters = {
    innerHeight: state => state.window.innerHeight,
    innerWidth: state => state.window.innerWidth,
}