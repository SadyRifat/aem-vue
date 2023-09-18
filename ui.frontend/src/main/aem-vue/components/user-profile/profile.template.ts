const UserProfileTemplate = {
    template: `<div>
                    <form @submit.prevent="submitForm">
                        <div>
                            <label>{{ modelData.titleLabel }}</label>
                            <select v-model="form.titleCode" id="hello" @change="validate('title')">
                                <option value="" disabled> {{modelData.titleLabel}} </option>
                                <option v-for="titleOption in modelData.titleItems" :value="titleOption.value">
                                    {{ titleOption.name }}
                                </option>
                            </select>
                            <p v-if="errors.title">{{ errors.title }}</p>
                        </div>
                        <div>
                            <label>{{modelData.firstNameLabel}}</label>
                            <input type="text" v-model="form.firstName"
                                @blur="validate('firstName')" @keypress="validate('firstName')">
                            <p v-if="errors.firstName">{{ errors.firstName }}</p>
                        </div>
                        <div>
                            <label>{{modelData.lastNameLabel}}</label>
                            <input type="text" v-model="form.lastName"
                                @blur="validate('lastName')" @keypress="validate('lastName')">
                            <p v-if="errors.lastName">{{ errors.lastName }}</p>
                        </div>
                        <div>
                            <label>{{modelData.customerIdLabel}}</label>
                            <input type="text" v-model="form.customerId" disabled>
                        </div>
                        <button type="submit">{{modelData.submitLabel}}</button>
                    </form>
                </div>`,
    props: ['modelData']
};

export default UserProfileTemplate;
