




function loginMe(){
    var login= new Object();
    var username = document.getElementById("usernamelogin").value;
    var url = profilelogin_url + username

    var postlogin = new XMLHttpRequest();
    postlogin.open("GET", url, true);
    postlogin.setRequestHeader("Content-Type", "application/json");

    login.password = document.getElementById("passwordlogin").value;
    console.log(document.getElementById("passwordlogin").value);
    
    console.log(login)
    console.log(url)
    console.log('in user controller',username,document.getElementById("passwordlogin").value);

    

    
    postlogin.send(JSON.stringify(login));

    postlogin.onload = function() {
        console.log("new login sent");
        $('#loginModal').modal('hide');
        $('#successModal').modal('show');
        var token = JSON.parse(postlogin.responseText);


    
    };
    // Convert the data in login object to JSON format before sending to the server.
    

}