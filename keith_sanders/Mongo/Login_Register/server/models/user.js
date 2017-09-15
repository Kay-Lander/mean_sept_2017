const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let UserSchema = new mongoose.Schema({
      first_name: {
        type: String
      },
      last_name: {
        type: String
      },
      email: {
        type: String,
        unique: true
      },
      password: {
        type: String
      },
      birthday: {
        type: Date
      }
}, { timestamp: true });

UserSchema.methods.authen = function(password){
    return bcrypt.compareSync(password, this.password);
}


mongoose.model('User', UserSchema);
