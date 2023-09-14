import CountTemplate from './template';
import AppStore from "../../store/index";
const { ref, defineComponent } = (window as any).Vue;

const Counter = defineComponent({
    template: CountTemplate.template,
    props: {
        modelData: Object
    },
    methods: {
        incrementCount(){
            AppStore.dispatch('increment');
        },
        decrementCount(){
            AppStore.dispatch('decrement');
        }
    },
    computed: {
        counterNow() {
            return AppStore.getters.getCounter;
        }
    }
});

export default Counter;
