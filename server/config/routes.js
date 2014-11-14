var passport = require('passport');

module.exports = function(app){

    app.get('/partials/*', function(req, res){
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', function(req, res, next) {
        console.log('req.body is: ' + req.body);
        var auth = passport.authenticate('local', function(err, user) {
            if (err) {
                console.log(err);
                return next(err);
            }
            if (!user) {
                res.send({
                    success: false
                })
            }
            req.logIn(user, function(err) {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                res.send({
                    success: true,
                    user: user
                });
            })
        })
        auth(req, res, next);
    });

    app.get('*', function(req, res){
        res.render('index');
    });
}