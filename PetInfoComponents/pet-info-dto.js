//server side logic for dto
//file contains the dto class used to structure the data

//dto for BOTH the pet-info and pet-info-edit pages since same info
class PetInfoDTO{
    constructor(username, petName, photos, allergies, petBirthday, sex, feedingInstructions, medical, likes, dislikes, vaccines){
        this.username = username;
        this.petName = petName;
        this.photos = photos; //profile picture and gallery or does it make sense to split?
        this.allergies = allergies;
        this.petBirthday = petBirthday;
        this.sex = sex;
        this.feedingInstructions = feedingInstructions;
        this.medical = medical;
        this.likes = likes;
        this.dislikes = dislikes;
        this.vaccines = vaccines;
    }
 
}

module.exports = PetInfoDTO;