"use strict";

var db = require('../db-connection');
class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * from restaurant_review.review"; //sends sql query to get all the review items
        db.query(sql,callback);
    }

    getAComment(naming,callback){
        var sql = "SELECT * from restaurant_review.restaurant INNER JOIN review ON review.restaurantid = restaurant.restaurantid WHERE restaurant.name = ?" ; //sends sql query to get all the review items
        db.query(sql,[naming],callback);
    }

    addComment(comment, callback)
    {
        var sql = "INSERT INTO review( username, logo , reviewtxt, rating, profileid, restaurantid, date_posted ) VALUES(?,?,?,?,?,?,?)"; //sends sql query to insert username, logo , reviewtxt, rating, profileid, restaurantid, date_posted columns into a new row in review table
        db.query(sql, [ comment.getUsername(), comment.getLogo(), comment.getReviewtxt(), comment.getRating(),
             comment.getProfileid(), comment.getRestaurantid(), comment.getDate_posted()], callback);
    }

    updateComment(comment, callback){
        var sql = "UPDATE review SET reviewtxt= ?, username=?, rating = ?, date_posted = ? WHERE _id = ?"; //sends sql query to update a row for reviewtxt, username, rating date_posted columns from a specific id
        return db.query(sql, [comment.getReviewtxt(), comment.getUsername(), comment.getRating(), comment.getDate_posted(), comment.getId()], callback);
    }

    deleteComment(commentID, callback){
        var sql = "DELETE from review WHERE _id = ?"; //sends sql query to delete a specific row with id used.
        return db.query(sql, [commentID], callback);
    }

    
}

module.exports = CommentsDB; //exports CommentsDB module to be used in commentController.js