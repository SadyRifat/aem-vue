const LoginTemplate = {
    template : `<div>
                    <form @submit.prevent="doLogin">
                        <div class="flex flex-col bg-[color:var(--dark-blue)]">
                            <label class="shadow-lg shadow-cyan-500/50" for="email">{{ modelData.email }}</label>
                            <input type="email" v-model="email" required>
                        </div>
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
