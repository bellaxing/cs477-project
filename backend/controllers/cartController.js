const Cart = require('../models/cart');
exports.getAllCart= async (req,res,next)=>{
    const item= await Cart.findAll();;
   res.status(200).json(item)
}
exports.save= async (req,res,next)=>{
  try{
     await Cart.save(req.body) 
    res.status(200).json(req.body); 
  }catch(err){
      next(err)
  }
 
}

exports.delete= async (req,res,next)=>{
  try{
    if(req.params.id){
      await Cart.removeById(req.params.id)

      res.status(200).json({deleted:"successfully"})
    } else if(req.params.username){
      let orderHistory=[]
    let user =await Cart.findByUserName(req.params.username);
    await Cart.removeByUserName(req.params.username)
    orderHistory.push(user)
       while(user){
        user =await Cart.findByUserName(req.params.username)
        await Cart.removeByUserName(req.params.username)
       if(user){
        orderHistory.push(user)
       } 
       }
     //let orderedItem= [orderHistory] 
       console.log(orderHistory)
      res.status(200).json({ordered:orderHistory})
    }
    
  }catch(err){
     next(err)
  }
}