"use strict";

class Comment {
    constructor(id, username, logo, reviewtxt, rating, profileid, restaurantid, date_posted) {
        this.id = id;
        this.username = username;
        this.logo = logo;
        this.reviewtxt = reviewtxt;
        this.rating = rating;
        this.profileid = profileid;
        this.restaurantid = restaurantid;
        this.date_posted = date_posted;
    }

    //Comment getters
    getId() { return this.id; }
    getUsername() {return this.username; }
    getLogo() {return this.logo; }
    getReviewtxt() {return this.reviewtxt; }
    getRating() {return this.rating; }
    getProfileid() {return this.profileid; }
    getRestaurantid() {return this.restaurantid}
    getDate_posted() { return this.date_posted; }

    
    

    //comment setters
    setId(id) {
        this.id = id;
    }
    setUsername(username) {
        this.username = username;
    }
    setLogo(logo) {
        this.logo = logo;
    }
    setReviewtxt(reviewtxt) {
        this.reviewtxt = reviewtxt;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setProfileid(profileid) {
        this.profileid = profileid;
    }
    setRestaurantid(restaurantid) {
        this.restaurantid = restaurantid;
    }
    setDate_posted(date_posted) {
        this.date_posted = date_posted;
    }

    

}


module.exports = Comment;