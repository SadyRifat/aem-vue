export default {
    namespaced: true,
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    actions: {
        incrementCounter(context) {
            context.commit('increment');
        },
    },
    getters: {
        getCount(state) {
            return state.count;
        },
    },
};
