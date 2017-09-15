//get the models
const mongoose =require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');

class UsersController {
    begin(req, res ) {
      return res.render('index');
    }
    main(req, res){
      if(!req.session.user_id){
      return res.redirect('/');
      }
      res.render('main', {user: req.session})
    }
    create(req, res) {
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(15));
      User.create(req.body, (err, user) => {
      if(err){
          console.log(err);
      }
      req.session.user_id = user._id;
      //optionial or use json
      return res.redirect('/main');
      })
    }
    authen(req, res) {
        User.findOne({ email: req.body.email }, ( err, user) =>{
        if(err){
          return res.redirect('/');
        }
        if(user && user.authen(req.body.password)){
            req.session.user_id = user._id;
            return res.redirect('/main');
        }
        return res.json({
                "error": 'invalid credentials'
        })
      })
    }
    loggedin(req, res){
      if(req.session.user_id){
      return true
      } else{
      return false
      }
    }
    logout(req, res){
    delete req.session.user_id;
    return res.redirect('/')
    }
}

module.exports = new UsersController();
