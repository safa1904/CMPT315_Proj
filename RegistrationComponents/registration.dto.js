class UserDTO {
    constructor(fullName, username, email, phoneNumber, password, streetAddress, province, city, postalCode) {
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.streetAddress = streetAddress;
        this.province = province;
        this.city = city;
        this.postalCode = postalCode;
    }
}

module.exports = UserDTO;