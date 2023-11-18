const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/user'); // Assuming you have a User model

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        // Find the user by email in your MongoDB database
        const user = await User.findOne({ email });

        // If the user is not found or the password is incorrect, return false
        if (!user || !(await user.comparePassword(password))) {
          return done(null, false, { message: 'Invalid email or password' });
        }

        // If the user is found and the password is correct, return the user
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};