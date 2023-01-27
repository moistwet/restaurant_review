"use strict";
const CommentsDB = require('../models/CommentsDB') //import CommentsDB module from CommentsDB.js
const Comment = require('../models/Comment') //import Comment 
var commentsDB = new CommentsDB();
function getAllComments(request, respond){
    commentsDB.getAllComments(function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAComment(request, respond){
    var naming=request.params.naming
    commentsDB.getAComment(naming, function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addComment(request, respond) {
    var now = Date();
    var comment = new Comment(null, request.body.username , request.body.logo , request.body.reviewtxt , request.body.rating ,
         request.body.profileid , request.body.restaurantid, now.toString()); //for user to input the values inside the sql query
    commentsDB.addComment(comment, function (error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    });
}

function updateComment(request, respond){
    var now = new Date(); //Date used to record current date to be recorded in date_posted column
    var comment = new Comment(parseInt(request.params.id), request.body.username, request.body.logo,
        request.body.reviewtxt, request.body.rating, request.body.profileid, request.body.restaurantid, now.toString()); //for user to input the values inside the sql query
    commentsDB.updateComment(comment, function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function deleteComment(request, respond){
    var commentID = request.params.id;
    commentsDB.deleteComment(commentID, function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    })
}
module.exports = {getAllComments,addComment,updateComment,deleteComment,getAComment}; //exports getAllComments,addComment,updateComment,deleteComment module to be used in server.js
