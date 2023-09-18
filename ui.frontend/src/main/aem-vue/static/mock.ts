import registrationData from "./resource/registration";
import userProfileData from "./resource/user-profile";

Array.from(document.getElementsByTagName("registration")).forEach((element) => {
    element.setAttribute(":model-data", JSON.stringify(registrationData));
});

Array.from(document.getElementsByTagName("user-profile")).forEach((element) => {
    element.setAttribute(":model-data", JSON.stringify(userProfileData));
});
