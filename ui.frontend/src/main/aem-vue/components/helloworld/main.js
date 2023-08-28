import HelloTemplate from './template'
import AppStore from "../../store";

const { ref, defineComponent, watch } = Vue;

export default defineComponent({
    template: HelloTemplate.template,
    props: {
        modelData: String
    },
    setup() {
        const count = ref(AppStore.getters['Counter/getCount']);
        watch(() => AppStore.getters['Counter/getCount'],
            (newCount) => {
                count.value = newCount + 2;
            }
        );
        return { count };
    },
});
