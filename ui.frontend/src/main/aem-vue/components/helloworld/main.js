import HelloTemplate from './template'
const {defineComponent} = Vue;

export default defineComponent({
    template: HelloTemplate.template,
    props: {
        modelData: String
    },
    setup() {

    },
});
