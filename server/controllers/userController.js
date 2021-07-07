const User=require('../models/user')
exports.signup = (req, res, next) => {
    console.log(req.user)
    const user = new User(null,req.body.email, req.body.username, req.body.password).saveUsers();
    if (user) {
        
        res.status(201).json(user);
    } else {
        res.status(910).json({ 'error': 'username already exists' });
    }
}
