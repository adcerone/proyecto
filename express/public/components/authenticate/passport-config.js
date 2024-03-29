const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/user');

module.exports = function (passport) {
  passport.use(new LocalStrategy(
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username });

        if (!user || user.password !== password) {
          return done(null, false, { message: 'Incorrect username or password' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};
