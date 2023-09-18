import * as Yup from "yup";

interface FormModel {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface CustomValidationError extends Yup.ValidationError {
    path: string;
}

interface UserRegistrationModel {
    firstName: string;
    lastName : string;
    password: string;
    titleCode: string;
    uid: string;
}

export { FormModel, CustomValidationError, UserRegistrationModel };
