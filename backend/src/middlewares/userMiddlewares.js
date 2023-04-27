function authMiddleware(req, res, next){
    if(req.session.user) {
        return next();
    }else{
        return res.redirect('/user/login');
    }
}
module.exports = authMiddleware;