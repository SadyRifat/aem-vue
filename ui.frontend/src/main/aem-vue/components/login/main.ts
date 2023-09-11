import LoginTemplate from "./template";
import AppStore from "../../store/index";
import {doLoginRequestByPassword} from "../../external/hybris/auth/auth";
const { ref, defineComponent } = (window as any).Vue;

const Login = defineComponent({
    template: LoginTemplate.template,
    props: {
        modelData: Object
    },
    methods: {
        resetState() {
            AppStore.dispatch('resetCounter');
        }
    },
    setup() {
        const email = ref('');
        const password = ref('');
        const message = ref('');

        const doLogin =  async() => {
            console.log("Email: " + email.value);
            console.log("Password: " + password.value);
            const tokenResponse = await doLoginRequestByPassword(email.value, password.value);

            AppStore.dispatch('incrementCounter');
            // Update the message
            message.value = tokenResponse.access_token;
        };
        return { email, password, message, doLogin };
    }
});

export default Login;
