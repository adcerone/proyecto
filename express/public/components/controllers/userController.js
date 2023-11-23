const User = require('../../models/user');

const UserController = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;


      const existingUser = await UserController.getUserByEmail(email);

      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists.' });
      }


      const newUser = new User({ email, password });


      await UserController.createUser(newUser);

      res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  },

  
  getAllUsers: async () => {

    const users = await User.find();
    return users;
  },


  getUserByEmail: async (email) => {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
    }
  },

  createUser: async (user) => {
    try {
      const savedUser = await user.save();
      return savedUser;
    } catch (error) {
      console.error('Error ', error);
      throw error;
    }
  },
  
};

module.exports = UserController;
