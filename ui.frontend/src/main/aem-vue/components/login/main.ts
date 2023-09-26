import LoginTemplate from "./template";
import {doLoginRequestByPassword} from "../../external/hybris/auth/auth";
const { ref, defineComponent } = (window as any).Vue;

const Login = defineComponent({
    template: LoginTemplate.template,
    props: {
        modelData: Object
    },
    methods: {
        
    },
    setup() {
        const email = ref('');
        const password = ref('');
        const message = ref('');

        const doLogin =  async() => {
            console.log("Email: " + email.value);
            console.log("Password: " + password.value);
            const tokenResponse = await doLoginRequestByPassword(email.value, password.value);
            message.value = tokenResponse.access_token;
        };
        return { email, password, message, doLogin };
    }
});

export default Login;
