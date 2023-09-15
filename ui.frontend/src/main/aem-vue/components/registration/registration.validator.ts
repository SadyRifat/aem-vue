import * as Yup from 'yup';
import {CustomValidationError, FormModel} from './registration.model';

function createValidationSchema(props: any) {
    return Yup.object().shape({
        email: Yup.string()
            .email(props.modelData.emailErrorMessage)
            .required(props.modelData.emailErrorMessage),
        firstName: props.modelData.fnameRequired
            ? Yup.string().required(props.modelData.firstNameErrorMessage)
            : Yup.string(),
        password: Yup.string()
            .min(8, props.modelData.passwordErrorMessage)
            .required(props.modelData.passwordErrorMessage),
    });
}

function validateField(field: keyof FormModel, value: any, validationSchema: Yup.ObjectSchema<FormModel>): { [key: string]: string } | null {
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

function validateForm(formData: FormModel, validationSchema: Yup.ObjectSchema<FormModel>): { [key: string]: string } {
    try {
        validationSchema.validateSync(formData, {abortEarly: false});
        return {};
    } catch (validationError) {
        if (validationError instanceof Yup.ValidationError) {
            const errors: { [key: string]: string } = {};
            (validationError.inner as CustomValidationError[]).forEach((error) => {
                errors[error.path] = error.message;
            });
            return errors;
        }
        return {};
    }
}

export {createValidationSchema, validateField, validateForm};

