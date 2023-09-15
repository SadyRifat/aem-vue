import RegistrationTemplate from "./registration.template";
import { FormModel } from "./registration.model";
import * as Yup from 'yup';
import { createValidationSchema, validateField, validateForm } from "./registration.validator";
import {userRegistration} from "./registration.api.data";
const { ref, defineComponent } = (window as any).Vue;

const Registration = defineComponent({
    template: RegistrationTemplate.template,
    props: {
        modelData: Object,
    },
    setup(props: any) {
        const form = ref({
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        const errors = ref({});
        let formSubmitted = false;
        const validationSchema = createValidationSchema(props) as Yup.ObjectSchema<FormModel>;

        const validate = async (field: keyof FormModel) => {
            if (!formSubmitted) {
                return;
            }
            const fieldErrors = validateField(field, form.value[field], validationSchema);
            if (fieldErrors) {
                errors.value = { ...errors.value, ...fieldErrors };
            } else {
                errors.value[field] = '';
            }
        };

        // Submit form handler
        const submitForm = async () => {
            formSubmitted = true;
            const formErrors = validateForm(form.value, validationSchema);
            if (Object.keys(formErrors).length === 0) {
                const registrationResponse = await userRegistration(form.value);
                console.log("Registration Response" + registrationResponse);
            } else {
                errors.value = { ...errors.value, ...formErrors };
            }
        };
        return { form, errors, submitForm, validate };
    }
});

export default Registration;
