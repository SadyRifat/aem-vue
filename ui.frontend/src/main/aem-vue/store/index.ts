import state from './module/state';
import * as getters from './module/getter';
import * as mutations from './module/mutation';
import * as actions from './module/action';

const { createStore } = (window as any).Vuex;

const storedState = JSON.parse(localStorage.getItem('vuex_state') || 'null');

const AppStore: any = createStore({
    devtools: false,
    state: storedState || state,
    getters,
    mutations,
    actions,
});

AppStore.subscribe((mutation: any, state: any) => {
    localStorage.setItem('vuex_state', JSON.stringify(state));
});
export default AppStore;
