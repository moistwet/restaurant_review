"use strict";
const RestaurantDB = require('../models/RestaurantDB'); //import RestaurantDB module from RestaurantDB.js
var restaurantDB = new RestaurantDB();
function getAllRestaurants(request, respond){
    restaurantDB.getAllRestaurants(function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllRestaurantswithhighrating(request, respond){
    restaurantDB.getAllRestaurantswithhighrating(function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllRestaurantAscendingRating(request, respond){
    restaurantDB.getAllRestaurantAscendingRating(function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllRestaurantDescendingRating(request, respond){
    restaurantDB.getAllRestaurantDescendingRating(function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantByName(request, respond){
    var naming = request.params.naming
    restaurantDB.getRestaurantByName(naming,function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantCommentByName(request, respond){
    var namings = request.params.namings
    console.log(namings)
    restaurantDB.getRestaurantCommentByName(namings,function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("urmom function");
        }
    });
}









module.exports = {getAllRestaurants, getAllRestaurantswithhighrating,getAllRestaurantAscendingRating,getAllRestaurantDescendingRating,getRestaurantByName,getRestaurantCommentByName}; //exports getAllRestaurants and rest of module to be used in server.js