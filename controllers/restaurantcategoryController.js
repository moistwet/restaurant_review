"use strict";
const RestaurantcategoryDB = require('../models/RestaurantcategoryDB'); //import RestaurantcategoryDB module from RestaurantcategoryDB.js
var restaurantcategoryDB = new RestaurantcategoryDB();
function getAllRestaurantcategory(request, respond){
    restaurantcategoryDB.getAllRestaurantcategory(function(error, result){  //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllRestaurantcategoryspecific(request, respond){
    var category = request.params.category;
    restaurantcategoryDB.getAllRestaurantcategoryspecific(category,function(error, result){  //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllRestaurantcategory,getAllRestaurantcategoryspecific}; //exports getAllRestaurantcategory module to be used in server.js