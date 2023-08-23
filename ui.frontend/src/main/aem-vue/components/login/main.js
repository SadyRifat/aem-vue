import LoginTemplate from "./template";
const { ref, defineComponent } = Vue;

const Login = defineComponent({
    template: LoginTemplate.template,
    props: {
        modelData: Object
    },
    setup() {
        const email = ref('');
        const password = ref('');
        const message = ref('');

        const doLogin = async () => {
            console.log("Email: " + email.value);
            console.log("Password: " + password.value);

            // Update the message
            message.value = "Form Submitted";
        };
        return { email, password, message, doLogin };
    },
});

export default Login;
