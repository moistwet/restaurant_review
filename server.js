var express = require("express");

var restaurantController = require('./controllers/restaurantController'); //imports restaurantController.js
var commentController = require('./controllers/commentController'); //imports CommentController.js
var profileController = require('./controllers/profileController'); //imports ProfileController.js
var restaurantcategoryController = require('./controllers/restaurantcategoryController'); //imports restaurantcategoryController.js
var app = express();

app.use(express.static("./public"));
app.use(express.json());
//command to be used in postman
app.route('/restaurant').get(restaurantController.getAllRestaurants);
app.route('/restaurants').get(restaurantController.getAllRestaurantswithhighrating);
app.route('/restaurantsasc').get(restaurantController.getAllRestaurantAscendingRating);
app.route('/restaurantsdesc').get(restaurantController.getAllRestaurantDescendingRating);
app.route('/restaurantname/:naming').get(restaurantController.getRestaurantByName);
app.route('/restaurantcommentname/:namings').get(restaurantController.getRestaurantCommentByName);



app.route('/comments').get(commentController.getAllComments);
app.route('/comments').post(commentController.addComment);
app.route('/comments/:id').put(commentController.updateComment);
app.route('/comments/:id').delete(commentController.deleteComment);
app.route('/comments/a/:naming').get(commentController.getAComment);

app.route('/profiles').get(profileController.getAllProfiles);
app.route('/profiles').post(profileController.addProfile);
app.route('/highestprofile').get(profileController.getHighestProfile);

app.route('/profiles/:id').put(profileController.updateProfile);
app.route('/profiles/:id').delete(profileController.deleteProfile);

app.route('/profiles/:id').get(profileController.getAProfile);
app.route('/profileslogin/:username').get(profileController.getLoginCredentials);



app.route('/restaurantcategory').get(restaurantcategoryController.getAllRestaurantcategory);
app.route('/restaurantcategoryspec/:category').get(restaurantcategoryController.getAllRestaurantcategoryspecific);





app.listen(8080, "127.0.0.2");
console.log("web server running @ http://127.0.0.2:8080");