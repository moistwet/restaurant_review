

function fetchProfile() {
    var request = new XMLHttpRequest();

    request.open('GET', profile_url, true);
    

    //This command starts the calling of the profiles api
    request.onload = function() {
    //get all the profiles records into our profiles array
    profile_array = JSON.parse(request.responseText);
    console.log(profile_array);
    };

    request.send();
}


function registerMe(){
    var profile= new Object();
    profile.username = document.getElementById("username").value;
    profile.password = document.getElementById("password").value;
    profile.pfp = "test.images.jpg"
    profile.email_address= document.getElementById("email_address").value;
    profile.address = "testaddress"
    console.log(profile)

    var postProfile = new XMLHttpRequest();

    postProfile.open("POST", profile_url, true);
    postProfile.setRequestHeader("Content-Type", "application/json");
    postProfile.send(JSON.stringify(profile));

    postProfile.onload = function() {
        console.log("new Profile sent");
        $('#messageModal1').modal('hide');
        $('#successModal').modal('show');


    fetchProfile();
    };
    // Convert the data in Profile object to JSON format before sending to the server.
    

}