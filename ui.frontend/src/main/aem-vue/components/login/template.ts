const LoginTemplate = {
    template : `<div>
                    <form @submit.prevent="doLogin">
                        <div>
                            <label class="" for="email">{{ modelData.email }}</label>
                            <input type="email" v-model="email" required>
                        </div>
                        <br>
                        <label for="password">{{ modelData.password }}</label>
                        <input type="password" v-model="password" required>
                        </br>
                        <button class="my-4" type="submit">{{ modelData.submitLabel }}</button>
                    </form>
                    <form @submit.prevent="resetState">
                        <button type="submit">Reset</button>
                    </form>
                    <p v-if="message">{{ message }}</p>
                </div>`,
    props: ['modelData']
};

export default LoginTemplate;
