function guestMiddleware(req, res, next){
    if(req.session.usuarioLogueado == undefined) {
        return next();
    }else{
        return  res.redirect('/');
    }
}
module.exports = guestMiddleware;