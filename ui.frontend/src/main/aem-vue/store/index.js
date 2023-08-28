import Counter from "./module/counter"

const { createStore } = Vuex;

const AppStore = createStore({
    modules: {
        Counter
    }
});

export default AppStore;
