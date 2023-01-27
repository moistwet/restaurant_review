"use strict";
const ProfilesDB = require('../models/ProfilesDB')//import ProfilesDB module from ProfilesDB.js
const Profile = require('../models/Profile') //import Profile
var profilesDB = new ProfilesDB();

function getAllProfiles(request, respond){
    profilesDB.getAllProfiles(function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getHighestProfile(request, respond){
    profilesDB.getHighestProfile(function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function addProfile(request, respond) {
    var profile = new Profile( null, request.body.username ,request.body.password, request.body.email_address , request.body.pfp ,
         request.body.address); //for user to input the values inside the sql query
    profilesDB.addProfile(profile, function (error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    });
}
//id, username, email_address, pfp, address
function updateProfile(request, respond){
    var now = new Date();
    var profile = new Profile(parseInt(request.params.id), request.body.username, request.body.password,
        request.body.email_address, request.body.pfp, request.body.address); //for user to input the values inside the sql query
    profilesDB.updateProfile(profile, function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function deleteProfile(request, respond){
    var profileID = request.params.id;
    profilesDB.deleteProfile(profileID, function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    })
}

function getAProfile(request, respond){
    var profileID = request.params.id;
    profilesDB.getAProfile(profileID, function(error, result){ //for if there are no errors, respond with result, if there are errors, show errors
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    })
}

function getLoginCredentials(request,respond){
    var username=request.params.username;
    var pwd=request.body.password;
    var msg="";
    console.log('in user controller',username,pwd);
    profilesDB.getLoginCredentials(username,function(error,result){
        if(error){
            throwerror;
        }
        else{
            if(result.length>0){
                if(pwd==result[0].password){
                    msg="SUCCESS!";
                    console.log(msg);
                    
                }
                else{
                    msg="FAIL!";
                    console.log(msg);
                }
            }
            else{
                msg="USER NOT FOUND!";
                console.log(msg);
            }
        }
        respond.json(prepareMessage(msg));
    }
    );
}
function prepareMessage(msg){
    var obj={"message":msg};
    console.log(obj);
    return obj;
}





module.exports = {getAllProfiles,addProfile,updateProfile,deleteProfile,getAProfile, getHighestProfile,getLoginCredentials}; //exports getAllProfiles,addProfile,updateProfile,deleteProfile,getAProfile to be used in server.js
