function adminAccessAuthorized (req,res,next){
    if(req.session.usuarioLogueado && req.session.usuarioLogueado.category== 'admin' ){
        return next();
    }
    return res.redirect('/user/login');    
}
module.exports = adminAccessAuthorized;