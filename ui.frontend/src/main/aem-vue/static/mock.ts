import registrationData from "./resource/registration";
import userProfileData from "./resource/user-profile";
import userAddressData from "./resource/user-address";

Array.from(document.getElementsByTagName("registration")).forEach((element) => {
    element.setAttribute(":model-data", JSON.stringify(registrationData));
});

Array.from(document.getElementsByTagName("user-profile")).forEach((element) => {
    element.setAttribute(":model-data", JSON.stringify(userProfileData));
});

Array.from(document.getElementsByTagName("user-address")).forEach((element) => {
    element.setAttribute(":model-data", JSON.stringify(userAddressData));
});
0