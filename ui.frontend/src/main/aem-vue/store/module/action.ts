import { ProductModel } from "../../components/productDetails/productDetails.model";

const {Commit} = (window as any).Vuex;

export const incrementCounter = ({ commit }: { commit: typeof Commit }) => {
    commit('INCREMENT');
};

export const resetCounter = ({ commit }: { commit: typeof Commit }) => {
    commit('RESET');
};

export const increment = ({ commit }: { commit: typeof Commit }) => {
    commit('INCREMENTVAL');
};
export const decrement = ({ commit }: { commit: typeof Commit }) => {
    commit('DECREMENTVAL');
}

//add to cart
export const addToCart = ({ commit }: { commit: typeof Commit }, {PDCode, productCount}: ProductModel ) => {
    commit('ADDTOCART', {PDCode, productCount});
}
