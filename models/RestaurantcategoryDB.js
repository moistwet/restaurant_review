"use strict";

var db = require('../db-connection');
class RestaurantcategoryDB{
    getAllRestaurantcategory(callback){
        var sql = "SELECT * from restaurant_review.restaurantcategory"; //gets all the restaurant category items in restaurant category table.
        db.query(sql,callback);
    }
    getAllRestaurantcategoryspecific(category, callback){
        var sql = ("SELECT * from restaurant INNER JOIN restaurantcategory ON restaurantcategory.restaurantcatid = restaurant.restaurantid WHERE "+category+"=1");
        //var sql = "SELECT * from restaurantcategory WHERE (SELECT * FROM restaurant WHERE restaurant.restaurantcatid = restaurantcat.restaurantcatid )"; //gets all the restaurant category items in restaurant category table.
        return db.query(sql,callback);
    }

    

}

module.exports = RestaurantcategoryDB; //exports RestaurantcategoryDB to be used in restaurantCategoryController.