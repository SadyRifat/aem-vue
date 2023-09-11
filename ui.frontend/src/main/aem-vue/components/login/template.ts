const LoginTemplate = {
    template : `<div>
                    <form @submit.prevent="doLogin">
                        <label for="email">{{ modelData.email }}</label>
                        <input type="email" v-model="email" required>
                        <br>
                        <label for="password">{{ modelData.password }}</label>
                        <input type="password" v-model="password" required>
                        <br>
                        <button type="submit">{{ modelData.submitLabel }}</button>
                    </form>
                    <form @submit.prevent="resetState">
                        <button type="submit">Reset</button>
                    </form>
                    <p v-if="message">{{ message }}</p>
                </div>`,
    props: ['modelData']
};

export default LoginTemplate;
