function guestMiddleware(req, res, next){
    if(!req.session.usuarioLogueado) {
        return next();
    }else{
        return  res.redirect('/');
    }
}
module.exports = guestMiddleware;