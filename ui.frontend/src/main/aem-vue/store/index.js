const {createStore} = Vuex;
import state from './module/state'
import * as getters from './module/getter'
import * as mutations from './module/mutation'
import * as actions from './module/action'

const AppStore = createStore({
    state,
    getters,
    mutations,
    actions
});

export default AppStore;
