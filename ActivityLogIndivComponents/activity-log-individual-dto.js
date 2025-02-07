//server side logic for dto
//file contains the dto class used to structure the data
class ActivityLogIndivDTO{
    constructor(activityID, date, petName, photos, description, feedingDetails, addons, friends, comments, liked)
    {
        this.activityID = activityID;
        this.date = date; //do i need the date will it be displayed i was thinking the log shows dates? idk
        this.petName = petName;
        this.photos = photos;
        this.description = description;
        this.feedingDetails = feedingDetails;
        this.addons = addons;
        this.friends = friends;
        this.comments = comments;
        this.liked = liked;
    }
 
}

module.exports = ActivityLogIndivDTO;

//from googling then would need a controller.js and a backend server setup to handle the requests and send data to the front end...
// a js to fetch and display the data from the backend 