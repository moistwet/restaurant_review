"use strict";

var db = require('../db-connection');
class ProfilesDB{

    getAllProfiles(callback){
        var sql = "SELECT * from restaurant_review.profile"; //sends sql query to get all restaurant profiles
        db.query(sql,callback);
    }

    getHighestProfile(callback){
        var sql = "SELECT username FROM profile WHERE (SELECT COUNT(*) FROM review WHERE review.profileid = profile._id) >= 3;"; //sends sql query to get restaurant profiles that rate alot
        db.query(sql,callback);
    }

    getAProfile(profileID, callback){
        var sql = "SELECT * from profile WHERE _id = ?"; //sends sql query to get a specific restaurant profile
        return db.query(sql, [profileID], callback);
    }

    addProfile(profile, callback)
    {
        var sql = "INSERT INTO profile( username, password, email_address, pfp, address ) VALUES(?,?,?,?,?)"; //sends a sql query to insert a new row into profile table and add data to username password emailaddress, pfp and address columns
        db.query(sql, [ profile.getUsername(), profile.getPassword() ,profile.getEmail_address(), profile.getPfp(), profile.getAddress()], callback);
    }

    updateProfile(profile, callback){
        var sql = "UPDATE profile SET username=?, password = ? , email_address = ?, pfp = ? WHERE _id = ?"; //sends a sql query to update the username, password, email, pfp columns in a id specific row .
        return db.query(sql, [profile.getUsername(), profile.getPassword() ,profile.getEmail_address(), profile.getPfp(), profile.getId()], callback);
    }

    deleteProfile(profileID, callback){
        var sql = "DELETE from profile WHERE _id = ?"; //sends a sql query to delete a id specific row
        return db.query(sql, [profileID], callback);
    }

    getLoginCredentials(username,callback){
        console.log('in ProfilesDB DB',username);
        var sql="SELECT * FROM profile WHERE username = ?";
        return db.query(sql,[username],callback) ;
    }


    
}

module.exports = ProfilesDB; //exports the module ProfilesDB to be used in profileController.js