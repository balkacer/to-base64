class Base64 {
    constructor() {
    }
    stringToBase64(data) {
        return btoa(data);
    }
    base64ToString(data) {
        return atob(data)
    }
}
return Base64;
