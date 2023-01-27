"use strict";

var db = require('../db-connection');
class RestaurantDB{
    getAllRestaurants(callback){
        var sql = "SELECT * from restaurant_review.restaurant"; //sends sql query to get all restaurant items in restaurant table
        db.query(sql,callback);
    }

    getAllRestaurantswithhighrating(callback){
        var sql = "SELECT * FROM restaurant WHERE (SELECT COUNT(*) FROM review WHERE review.restaurantid = restaurant.restaurantid) >= 3; "; //sends sql query to get selected restaurant items in restaurant table that have high ratings
        db.query(sql,callback);
    }

    getAllRestaurantAscendingRating(callback){
        var sql = "SELECT * from restaurant_review.restaurant ORDER BY rating"; //sends sql query to get  restaurant items in restaurant table in ascending order
        db.query(sql,callback);
    }

    getAllRestaurantDescendingRating(callback){
        var sql = "SELECT * from restaurant_review.restaurant ORDER BY rating DESC"; //sends sql query to get  restaurant items in restaurant table in descending order
        db.query(sql,callback);
    }

    getRestaurantByName(naming,callback){
        var sql = "SELECT * from restaurant_review.restaurant WHERE name LIKE '%"+ naming +"%' "; //sends sql query to get  restaurant items in restaurant table in descending order
        db.query(sql,[naming],callback);
    }

    getRestaurantCommentByName(namings,callback){
        console.log("urmom db start");
        var sql = "SELECT * from restaurant_review.restaurant INNER JOIN restaurant_review.review ON restaurant.restaurantid = review.restaurantid WHERE name LIKE '%"+namings+"%'"; //sends sql query to get  restaurant items in restaurant table in descending order
        db.query(sql,callback);
        console.log(sql);
    }



    

    


    

    

    
}


module.exports = RestaurantDB;

