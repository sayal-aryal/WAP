function createUser(name, email, age) {
    const user = {}

    user.name = name;
    user.email = email;
    user.age = age;

    return user;
}

function getUserList() {

    const user1 = createUser("John Doe", "john.doe@gmail.com", 30);
    const user2 = createUser("Smith Shyam", "shyam.smith@gmail.com", 25);
    const user3 = createUser("David Camron", "david.camron@gmail.com", 20);

    const userList = [user1, user2, user3];
    return userList;

    
}

module.exports = getUserList;
