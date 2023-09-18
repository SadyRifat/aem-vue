const RegistrationTemplate = {
    template : `<form @submit.prevent="submitForm">
                    <div>
                      <label for="title">{{ modelData.titleLabel }}</label>
                      <select id="title" v-model="form.title" @change="validate('title')">
                        <option value="" disabled> {{modelData.titleLabel}} </option>
                        <option v-for="titleOption in modelData.titleItems" :value="titleOption.value">
                          {{ titleOption.name }}
                        </option>
                      </select>
                      <p v-if="errors.title">{{ errors.title }}</p>
                    </div>
                    <div>
                      <label for="firstName">{{modelData.firstNameLabel}}</label>
                      <input type="text" id="firstName" v-model="form.firstName"
                             @blur="validate('firstName')" @keypress="validate('firstName')">
                      <p v-if="errors.firstName">{{ errors.firstName }}</p>
                    </div>
                    <div>
                      <label for="lastName">{{modelData.lastNameLabel}}</label>
                      <input type="text" id="lastName" v-model="form.lastName"
                             @blur="validate('lastName')" @keypress="validate('lastName')">
                      <p v-if="errors.lastName">{{ errors.lastName }}</p>
                    </div>
                    <div>
                      <label for="email">{{modelData.emailLabel}}</label>
                      <input type="text" id="email" v-model="form.email"
                             @blur="validate('email')" @keypress="validate('email')">
                      <p v-if="errors.email">{{ errors.email }}</p>
                    </div>
                    <div>
                      <label for="password">{{modelData.passwordLabel}}</label>
                      <input type="password" id="password" v-model="form.password"
                             @blur="validate('password')" @keypress="validate('password')">
                      <p v-if="errors.password">{{ errors.password }}</p>
                    </div>
                    <div>
                      <label for="confirmPassword">{{modelData.confirmPasswordLabel}}</label>
                      <input type="password" id="confirmPassword" v-model="form.confirmPassword"
                             @blur="validate('confirmPassword')" @keypress="validate('confirmPassword')">
                      <p v-if="errors.confirmPassword">{{ errors.confirmPassword }}</p>
                    </div>
                  <button type="submit">{{modelData.submitLabel}}</button>
                </form>`,
    props: ['modelData']
};

export default RegistrationTemplate;
