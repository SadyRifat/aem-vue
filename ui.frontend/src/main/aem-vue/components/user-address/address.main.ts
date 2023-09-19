import {AddressModel} from "./address.model";
import {createValidationSchema, validateField, validateForm} from "./address.validator";
import * as Yup from "yup";
import UserAddressTemplate from "./address.template";
import * as addressAction from "./address.api.data";
const { ref,defineComponent,onMounted } = (window as any).Vue;

const UserAddress = defineComponent({
    template: UserAddressTemplate.template,
    props: {
        modelData: Object
    },
    setup(props: any) {
        const operation = ref('CREATE');
        const form = ref({
            id:'',
            cellphone: '',
            defaultAddress: '',
            firstName: '',
            lastName: '',
            line1: '',
            line2: '',
            phone: '',
            postalCode: '',
            titleCode: '',
            town: '',
            isocode: '',
            region: ''
        });
        const addressList = ref([]);
        const errors = ref({});
        const validationSchema = createValidationSchema(props.modelData) as Yup.ObjectSchema<AddressModel>;

        const validate = async (field: keyof AddressModel) => {
            const fieldErrors = validateField(field, form.value[field], validationSchema);
            if (fieldErrors) {
                errors.value = { ...errors.value, ...fieldErrors };
            } else {
                errors.value[field] = '';
            }
        };

        const fetchUserAddress = async (id: string) => {
            const userAddressResponse = await addressAction.getUserAddress(id);
            Object.assign(form.value, userAddressResponse);
            operation.value = "UPDATE";
        };

        const fetchUserAddressList = async () => {
            const userAddressListResponse = await addressAction.getUserAddressList();
            addressList.value = userAddressListResponse.addresses.map((address: any) => ({
                ...address,
                country: { isocode: address.country.isocode },
                region: { isocode: address.region.isocode },
            }));
        };

        const createUserAddress = async () => {
            const formErrors = validateForm(form.value, validationSchema);
            if (Object.keys(formErrors).length === 0) {
                await addressAction.postUserAddress(form.value);
            } else {
                errors.value = { ...errors.value, ...formErrors };
            }
        };

        const updateUserAddress = async () => {
            const formErrors = validateForm(form.value, validationSchema);
            if (Object.keys(formErrors).length === 0) {
                await addressAction.patchUserAddress(form.value);
            } else {
                errors.value = { ...errors.value, ...formErrors };
            }
        };

        const deleteUserAddress = async (id: string) => {
            await addressAction.deleteUserAddress(id);
        };

        const submitForm = async () => {
            if (operation.value === 'CREATE') {
                await createUserAddress();
            } else if (operation.value === 'UPDATE') {
                await updateUserAddress();
            }
        };

        onMounted(fetchUserAddressList);
        return { form, errors, addressList, submitForm, createUserAddress, validate, fetchUserAddress, deleteUserAddress};
    }
});

export default UserAddress;
