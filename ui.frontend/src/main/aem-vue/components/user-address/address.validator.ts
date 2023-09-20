import * as Yup from 'yup';
import {AddressCustomValidationError, AddressModel} from './address.model';

function createValidationSchema(modelData: any) {
    return Yup.object().shape({
        titleCode: modelData.titleRequired
            ? Yup.string().required(modelData.titleErrorMessage)
            : Yup.string(),
        firstName: modelData.fnameRequired
            ? Yup.string().required(modelData.firstNameErrorMessage)
            : Yup.string(),
        lastName: modelData.lnameRequired
            ? Yup.string().required(modelData.lastNameErrorMessage)
            : Yup.string(),
    });
}

function validateField(field: keyof AddressModel, value: any, validationSchema: Yup.ObjectSchema<AddressModel>): { [key: string]: string } | null {
    try {
        const fieldValidationSchema = Yup.object().shape({
            [field]: validationSchema.fields[field], // Get the specific field's validation rules
        });

        fieldValidationSchema.validateSync({[field]: value}, {abortEarly: false});
        return null;
    } catch (validationError) {
        if (validationError instanceof Yup.ValidationError) {
            return {[field]: validationError.message};
        }
        return null;
    }
}

function validateForm(formData: AddressModel, validationSchema: Yup.ObjectSchema<AddressModel>): { [key: string]: string } {
    try {
        validationSchema.validateSync(formData, {abortEarly: false});
        return {};
    } catch (validationError) {
        if (validationError instanceof Yup.ValidationError) {
            const errors: { [key: string]: string } = {};
            (validationError.inner as AddressCustomValidationError[]).forEach((error) => {
                errors[error.path] = error.message;
            });
            return errors;
        }
        return {};
    }
}

export {createValidationSchema, validateField, validateForm};

