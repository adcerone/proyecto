const express = require('express');
const next = require('next');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./public/js/mongodb');
const passport = require('passport');
const session = require('express-session');
const passportConfig = require('./public/components/authenticate/passport-config');
const User = require('./public/models/user');

require('dotenv').config();


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

connectToDatabase();

app.prepare().then(() => {
  const server = express();

  // Middleware
  server.use(cors());
  server.use(express.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(morgan('dev'));
  server.use(express.static('public'));
  server.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
    })
  );
  server.use(passport.initialize());
  server.use(passport.session());

  passportConfig(passport);


  const apiRouter = require('./router');
  apiRouter(server);


  server.all('*', (req, res) => {
    return handle(req, res);
  });


  const port = process.env.PORT || 3001;
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
