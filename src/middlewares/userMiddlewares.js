function authMiddleware(req, res, next){
    if(req.session.usuarioLogueado) {
        return next();
    }else{
        return res.redirect('/user/login');
    }
}
module.exports = authMiddleware;