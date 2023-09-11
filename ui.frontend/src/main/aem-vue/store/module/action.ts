const {Commit} = (window as any).Vuex;

export const incrementCounter = ({ commit }: { commit: typeof Commit }) => {
    commit('INCREMENT');
};

export const resetCounter = ({ commit }: { commit: typeof Commit }) => {
    commit('RESET');
};
