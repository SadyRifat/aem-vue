const UserAddressTemplate = {
    template: `<div>
                    <form @submit.prevent="submitForm">
                        <div>
                            <label>{{ modelData.countryLabel }}</label>
                            <select v-model="form.country.isocode" @change="validate('country')">
                                <option value="" disabled> {{modelData.countryLabel}} </option>
                                <option v-for="country in modelData.countryItems" :value="country.value">
                                    {{ country.name }}
                                </option>
                            </select>
                            <p v-if="errors.title">{{ errors.country }}</p>
                        </div>
                        <div>
                            <label>{{ modelData.titleLabel }}</label>
                            <select v-model="form.titleCode" @change="validate('title')">
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
                            <label>{{modelData.line1Label}}</label>
                            <input type="text" v-model="form.line1"
                                @blur="validate('line1')" @keypress="validate('line1')">
                            <p v-if="errors.line1">{{ errors.line1 }}</p>
                        </div>
                        <div>
                            <label>{{modelData.line2Label}}</label>
                            <input type="text" v-model="form.line2"
                                @blur="validate('line2')" @keypress="validate('line2')">
                            <p v-if="errors.line2">{{ errors.line2 }}</p>
                        </div>
                        <div>
                            <label>{{modelData.townLabel}}</label>
                            <input type="text" v-model="form.town"
                                @blur="validate('town')" @keypress="validate('town')">
                            <p v-if="errors.town">{{ errors.town }}</p>
                        </div>
                        <div>
                            <label>{{modelData.postalCodeLabel}}</label>
                            <input type="text" v-model="form.postalCode"
                                @blur="validate('postalCode')" @keypress="validate('postalCode')">
                            <p v-if="errors.postalCode">{{ errors.postalCode }}</p>
                        </div>
                        <div>
                            <label>{{modelData.phoneLabel}}</label>
                            <input type="text" v-model="form.phone"
                                @blur="validate('phone')" @keypress="validate('phone')">
                            <p v-if="errors.phone">{{ errors.phone }}</p>
                        </div>
                        <div>
                            <label>{{modelData.cellphone}}</label>
                            <input type="text" v-model="form.cellphone"
                                @blur="validate('cellphone')" @keypress="validate('cellphone')">
                            <p v-if="errors.cellphone">{{ errors.cellphone }}</p>
                        </div>
                        <button type="submit">{{modelData.submitLabel}}</button>
                    </form>
                    
                    <div>
                        <div v-for="address in addressList" class="col-md-6 cx-address-card">
                            <div>
                                <div class="cx-card cx-card-border cx-card-fit-to-container" tabindex="0" role="region" aria-label="Default Delivery Address">
                                    <div class="card-header"> ✓ DEFAULT </div>
                                    <div class="card-body cx-card-body">
                                        <div class="cx-card-container">
                                            <div class="cx-card-label-container">
                                                <div class="cx-card-label-bold"> {{address.firstName}} </div>
                                            </div>
                                        </div>
                                        <div class="cx-card-actions">
                                            <div>
                                                <button type="button" v-on:click="fetchUserAddress(address.id)" class="link cx-action-link"> Edit </button>
                                            </div>
                                            <div>
                                                <button type="button" v-on:click="deleteUserAddress(address.id)" class="link cx-action-link"> Delete </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`, props: ['modelData']
};

export default UserAddressTemplate;
