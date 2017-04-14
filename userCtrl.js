var users = require('./users');

module.exports = {

    readAll: function() {
        return users.find();
    },

    findUserById: function(userId) {
        var userById = users.findOne('id', userId);
        if (!userById) {
            return null;
        } else {
            return userById;
        }
    },

    getAdmins: function() {
        var admins = users.find('type', 'admin');
        if (!admins) {
            return null;
        } else {
            return admins;
        }
    },

    getNonAdmins: function() {
        var nonAdmins = users.find('type', 'user');
        if (!nonAdmins) {
            return null;
        } else {
            return nonAdmins;
        }
    },

    getUsersByFavorite: function(favorite) {
       var allUsers = users.find();
       var favoriteArr = [];
       for (var i = 0; i < allUsers.length; i++) {
           for (var j = 0; j < allUsers[i].favorites.length; j++) {
               if (favorite = allUsers[i].favorites[j]) {
                   favoriteArr.push(allUsers[i]);
               }
           }
       }
       if (favoriteArr.length = 0) {
           return null
       } else {
           return favoriteArr;
       }
    },

    getUsersByAgeLimit: function(age) {
        var allUsers = users.find();
        var ageLimitArr = [];
        for (var i = 0; i < allUsers.length; i++) {
            if (age >= allUsers[i].age) {
                ageLimitArr.push(allUsers[i])
            }
        }
        if (ageLimitArr.length = 0) {
            return null;
        } else {
            return ageLimitArr;
        }
    },

    findUserByQuery: function(query, value) {
        var userByQuery = users.find(query, value);
        if (!userByQuery) {
            return null;
        } else {
            return userByQuery;
        }
    },

    createUser: function(userObj) {
        var newUser = users.add(userObj);
        if (!newUser) {
            return null;
        } else {
            return newUser;
        }
    },

    updateUser: function(userId, userObj) {
        users.update('id', userId, userObj);
    },

    removeUser: function(userId) {
        var user = users.findOne('id', userId);
        users.remove('id', userId);
        return user;
    }
}
