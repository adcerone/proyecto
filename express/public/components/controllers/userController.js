const UserController = {
  createUser: async (user) => {
    try {
      const savedUser = await user.save();
      return savedUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },
};

module.exports = UserController;