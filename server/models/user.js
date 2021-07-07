let users = [];
module.exports = class User {
    constructor(id, email, username, password) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
    }
    saveUsers() {
        const foundUser = users.find((data) => this.username === data.username);
        if (!foundUser) {
            this.id = Math.random().toString();
            users.push(this)
            return this;
        }
        else {
            console.log("error");
        }


    }
    
}