import * as Yup from "yup";

interface Country {
    isocode: string;
}

interface Region {
    isocode: string;
    isoCodeShort: string;
}

interface AddressModel {
    id:string;
    cellphone: string;
    defaultAddress: boolean;
    firstName: string;
    lastName: string;
    line1: string;
    line2: string;
    phone: string;
    postalCode: string;
    titleCode: string;
    town: string;
    country: Country;
    region: Region;
}

interface AddressCustomValidationError extends Yup.ValidationError {
    path: string;
}

export { AddressModel, Region, Country, AddressCustomValidationError };
