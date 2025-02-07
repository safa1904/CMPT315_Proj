class ActivityLogDTO {
    constructor(category, date, time, description) {
        this.category = category;
        this.date = date;
        this.time = time;
        this.description = description;
    }
}

module.exports = ActivityLogDTO;