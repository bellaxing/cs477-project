const getDb = require("../util/database").getDB;
const { ObjectID } = require("mongodb");
class Bank{
    constructor(id,email,SSN,firstName,lastName,cardNumber,expDate,csv,balance){
        this._id= id; 
        this.email=email 
        this.SSN=SSN; 
        this.firstName=firstName;
        this.lastName=lastName;
        this.cardNumber=cardNumber;
        this.expDate= new Date(expDate) ;
        this.csv=csv;
        this.balance=balance;
    }
    static verifyBank(lastName,cardNumber,csv){
        // console.log("verify banks")
        return getDb()
        .collection("banks")
        .findOne({lastName:lastName,cardNumber:cardNumber,csv:csv});
      }
}