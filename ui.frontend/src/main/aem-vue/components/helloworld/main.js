import HelloTemplate from './template'
import AppStore from "../../store";

const { defineComponent } = Vue;

export default defineComponent({
    template: HelloTemplate.template,
    props: {
        modelData: String
    },
    setup() {

    },
    computed: {
        countNow() {
            return AppStore.getters.getCount;
        }
    }
});
