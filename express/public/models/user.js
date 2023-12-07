const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

let rolesValidos = {
  values: ["ADMIN", "USER"],
  message: '{VALUE} no es un role válido'
}


let Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: {
      type: String,
      required: [true, 'El nombre es necesario'],
  },
  email: {
      type: String,
      unique: true,
      required: [true, "El correo es necesario"],
  },
  password: {
      type: String,
      required: [true, "Le contraseña es obligatoria"],
  },
  role: {
      type: String,
      default: 'USER',
      required: [true],
      enum: rolesValidos,
  },
});

userSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
}

userSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser único'
})
module.exports = mongoose.model('User', userSchema)


