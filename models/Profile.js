"use strict";

class Profile {
    constructor(id, username, password, email_address, pfp, address) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email_address = email_address;
        this.pfp = pfp;
        this.address = address;
    }


    //Profile getters
    getId() { return this.id; }
    getUsername() {return this.username; }
    getPassword() {return this.password; }
    getEmail_address() {return this.email_address; }
    getPfp() {return this.pfp; }
    getAddress() {return this.address}


    
    
    //Profile setters
    setId(id) {
        this.id = id;
    }
    setUsername(username) {
        this.username = username;
    }
    setPassword(password) {
        this.password = password;
    }
    setEmail_address(email_address) {
        this.email_address = email_address;
    }
    setPfp(pfp) {
        this.pfp = pfp;
    }
    setAddress(address) {
        this.address = address;
    }

    
    


}


module.exports = Profile;