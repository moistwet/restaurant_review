//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestaurantData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', restaurant_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the movies records into our movie array        
	restaurant_array = JSON.parse(request.responseText);        
	//Fetch the comments as well        
	
    fetchComments();
    fetchProfile();
	console.log(restaurant_array) // output to console        
	//call the function so as to display all movies tiles for "Now Showing"
    displayRestaurants(category);    
};    

//This command starts the calling of the movies web api    
request.send();}


function displayRestaurants(category) {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";
    message=category
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        if (restaurant_array[count]) {
            var thumbnail = restaurant_array[count].logo;
            var title = restaurant_array[count].name;
	var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showRestaurantComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showRestaurantDetails(this)">' + title + '</h5></div>\
</div>'
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        }
    }
}

function listAllRestaurants() {
    category = "Restaurants";
    displayRestaurants(category);
    document.getElementById("RestaurantMenu").classList.add("active");
    document.getElementById("CommentsMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantTitle").textContent = restaurant_array[item].name;
    document.getElementById("logo").src = restaurant_array[item].logo;
    document.getElementById("rating").textContent = restaurant_array[item].rating;
    document.getElementById("about").textContent = restaurant_array[item].about;
    document.getElementById("restaurant_type").textContent = restaurant_array[item].restaurant_type;
    document.getElementById("coords").textContent = restaurant_array[item].location;
    document.getElementById("operating_hours").textContent = restaurant_array[item].operating_hours;
    document.getElementById("contact").textContent = restaurant_array[item].contact;
    document.getElementById("youtubeurl").src = restaurant_array[item].youtubereviewurl;
    

}


//This function opens a new window/tab and loads the
//particular movie in the cinema website
function gotorestaurantwebsite() {
    window.open(restaurant_array[currentIndex].website_url, "_blank");
}

//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getARestaurantData() {    
	var restaurantname = document.getElementById("restaurantname").value; //add code
    if (restaurantname==0) {
        getRestaurantData();

    }
    
    
    else{
	    var request = new XMLHttpRequest();
        console.log(restaurantname)    
	    request.open('GET', restaurantsearch_url + restaurantname, true);    
	    //This function will be called when data returns from the web api    
	    request.onload = function() {        
	    //get all the movies records into our movie array        
	    restaurant_array = JSON.parse(request.responseText);        
	    //Fetch the comments as well        
	
        fetchComments();
	    console.log(restaurant_array) // output to console        
	    //call the function so as to display all movies tiles for "Now Showing"
        displayRestaurants(category);    
        };  
        //This command starts the calling of the movies web api    
    request.send();  
    }

}



