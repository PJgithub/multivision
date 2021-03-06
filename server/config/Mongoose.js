var mongoose = require('mongoose');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error',console.error.bind(console, 'connection error'));
    db.once('open', function callback(){
        console.log('mongo db open');
    });

    var userSchema = mongoose.Schema({
       firstName: String,
        lastName: String,
        userName: String
    });

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
       if(collection.length === 0) {
           User.create({firstName: 'Per', lastName:'Johannessen', userName: 'pomodoro'});
           User.create({firstName: 'Marianna', lastName:'Bytinsky', userName: 'skatte'});
           User.create({firstName: 'Bruce', lastName:'Kim', userName: 'chingu'});
       }
    });
}