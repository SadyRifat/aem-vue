import * as Yup from "yup";

interface ProfileModel {
    titleCode: string;
    firstName: string;
    lastName: string;
    customerId: string;
}

interface ProfileCustomValidationError extends Yup.ValidationError {
    path: string;
}

interface UserProfileModel {
    firstName: string;
    lastName : string;
    titleCode: string;
    customerId: string;
}

export { ProfileModel, UserProfileModel, ProfileCustomValidationError };
