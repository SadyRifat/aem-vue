import * as Yup from 'yup';
import {ProfileCustomValidationError, ProfileModel} from './profile.model';

function createValidationSchema(props: any) {
    return Yup.object().shape({
        titleCode: props.modelData.titleRequired
            ? Yup.string().required(props.modelData.titleErrorMessage)
            : Yup.string(),
        firstName: props.modelData.fnameRequired
            ? Yup.string().required(props.modelData.firstNameErrorMessage)
            : Yup.string(),
        lastName: props.modelData.lnameRequired
            ? Yup.string().required(props.modelData.lastNameErrorMessage)
            : Yup.string(),
    });
}

function validateField(field: keyof ProfileModel, value: any, validationSchema: Yup.ObjectSchema<ProfileModel>): { [key: string]: string } | null {
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

function validateForm(formData: ProfileModel, validationSchema: Yup.ObjectSchema<ProfileModel>): { [key: string]: string } {
    try {
        validationSchema.validateSync(formData, {abortEarly: false});
        return {};
    } catch (validationError) {
        if (validationError instanceof Yup.ValidationError) {
            const errors: { [key: string]: string } = {};
            (validationError.inner as ProfileCustomValidationError[]).forEach((error) => {
                errors[error.path] = error.message;
            });
            return errors;
        }
        return {};
    }
}

export {createValidationSchema, validateField, validateForm};

