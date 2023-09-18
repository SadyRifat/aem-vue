import UserProfileTemplate from "../user-profile/profile.template";
import {ProfileModel} from "./profile.model";
import {createValidationSchema, validateField, validateForm} from "./profile.validator";
import {getUserProfile, updateUserProfile} from "./profile.api.data";
import * as Yup from "yup";

const { ref,defineComponent,onMounted } = (window as any).Vue;

const UserProfile = defineComponent({
    template: UserProfileTemplate.template,
    props: {
        modelData: Object
    },
    setup(props: any) {
        const form = ref({
            titleCode:'',
            firstName: '',
            lastName: '',
            customerId: ''
        });
        const userProfile = async () => {
            const userProfileResponse = await getUserProfile();
            Object.assign(form.value, userProfileResponse);
        };

        const errors = ref({});
        const validationSchema = createValidationSchema(props) as Yup.ObjectSchema<ProfileModel>;

        const validate = async (field: keyof ProfileModel) => {
            const fieldErrors = validateField(field, form.value[field], validationSchema);
            if (fieldErrors) {
                errors.value = { ...errors.value, ...fieldErrors };
            } else {
                errors.value[field] = '';
            }
        };

        // Submit form handler
        const submitForm = async () => {
            const formErrors = validateForm(form.value, validationSchema);
            if (Object.keys(formErrors).length === 0) {
                await updateUserProfile(form.value);
                await userProfile();
            } else {
                errors.value = { ...errors.value, ...formErrors };
            }
        };
        onMounted(userProfile);
        return { form, errors, submitForm, validate };
    }
});

export default UserProfile;
