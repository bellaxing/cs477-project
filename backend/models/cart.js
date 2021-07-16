const getDb = require("../util/database").getDB;
const { ObjectID } = require("mongodb");
class Cart{
    static save(item){
        return getDb().collection("carts").insertOne(item);
    }
    static removeById(id) {
        return getDb()
          .collection("carts")
          .deleteOne({ _id: new ObjectID(id)});
      }
    static removeByUserName(username){
        return getDb()
        .collection("carts")
        .deleteOne({userName:username}); 
    }
     static findAll() {
        return getDb().collection("carts").find().toArray();
      } 

    static findByUserName(userName) {
        return getDb()
          .collection("carts")
          .findOne({userName:userName});
      }
}

module.exports=Cart;