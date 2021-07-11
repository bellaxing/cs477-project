

let member =[];
let count = 1;

class User {
    constructor(id, username, password, firstname, lastname, address, city, zip, role){
        this.id=id
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.city =city;
        this.zip = zip;
        this.role =role;

    }

    login(){
        return member.find(item => item.username === this.username && item.password === this.password);

    }
saveMember(){
    this.id= count++;
    member.push(this);
    return this;
}

checkUserName(){
    if(member.length === 0){
        return -1;
    }else {
    return member.findIndex(item => item.username === this.username);

}

}
updateMember(){
    
    const memIndex = member.findIndex(item => item.username === this.username);
    if(memIndex >-1){
         member.splice(memIndex, 1, this);
         return this;
    }else {
        throw new Error("ITEM NOT FOUND")

    }

}
static allUsers(){
    return member;
}
}



module.exports = User;