const express = require('express')
const app = express();

const bookRouter = require('./routes/bookRouter')
const authRouter = require('./routes/authRouter')
const cartRouter = require('./routes/cartRouter')
const cors = require('cors')



app.use(cors())             // request enter this
app.use(express.json())  
   // request enter this


app.use(authRouter);        // reuest enter this //check have token or not
app.use(bookRouter); 
app.use(cartRouter); //app.use('/books', "bookRouter")



app.use((req, res, next) =>{
    res.status(404).json({error: err.message})
})

app.use((err, req, res, next) => {
    if(err.message === "ITEM NOT FOUND"){
        res.status(404).json({error: err.message})
    } else {
        res.status(500).json({error: "Try again"})
    }
})



app.listen(5000, ()=>console.log("Running server 5000"))




