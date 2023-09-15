import registrationData from "./resource/registration";

Array.from(document.getElementsByTagName("registration")).forEach((element) => {
    element.setAttribute(":model-data", JSON.stringify(registrationData));
});
