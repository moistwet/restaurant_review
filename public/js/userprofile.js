//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getProfileData() {    
    var profile = new Object();
	var request = new XMLHttpRequest(); 
    //input url name
    var profilename = document.getElementById("usernameing").value; //add code  
    //input password
    profile.password = document.getElementById("passwording").value;
    console.log(profile)
    
	request.open('GET', profilelogin_url + profilename, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the movies records into our movie array        
	profile_array = JSON.parse(request.responseText);        
	//Fetch the comments as well        
	
    fetchComments();
	console.log(profile_array) // output to console        
	//call the function so as to display all movies tiles for "Now Showing"
    displayprofiles(category);    
};    

//This command starts the calling of the movies web api    
request.send();}