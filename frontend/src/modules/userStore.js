import userService from '../services/UserService.js'


export default {
  state: {
    users: [],
    filterBy: null,
  },
  mutations: {
    setUsers(state, { users }) {
      state.users = users
    },
   
    deleteUser(state, { userId }) {
      let idx = state.users.findIndex(user => user._id === userId)
      state.users.splice(idx, 1);
     
    },
    saveUser(state, { user }) {
      const idx = state.users.findIndex(currUser => currUser._id === user._id)
      state.users.splice(idx, 1, user);
    },

  },
  actions: {
    async loadUsers(context, ) {
     const users = await userService.query()
       try {
         context.commit({ type: 'setUsers', users })
       } catch (err) {console.log(err);
       }
    },
    getUserById(context, { userId }) {
      return userService.getById(userId)
    },
    async deleteUser(context, { userId }) {
      await userService.remove(userId)
      try {context.commit({
          type: 'deleteUser',
          userId
        })}
        catch (err) {console.log(err);
        }
    },
    async saveUser(context, { user }) {
      const savedUser = await userService.save(user)
      try{
        context.commit({ type: 'saveUser', user: savedUser })
      } catch (err) {console.log(err);
      }
    },

  },
  getters: {
    usersToshow(state) {
      return state.users
    },
  },
}