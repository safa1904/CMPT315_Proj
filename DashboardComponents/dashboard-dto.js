class DashboardDTO {
    constructor(name, email, address, postalCode, petList, recentActivities)
    {
        this.name = name;
        this.email = email;
        this.address = address;
        this.postalCode = postalCode;
        this.petList = petList;
        this.recentActivities = recentActivities;
    }

}

module.exports = DashboardDTO;
