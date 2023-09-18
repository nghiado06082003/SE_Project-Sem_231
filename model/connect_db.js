/*
    ATTENTION: Right now, the database is hard-coded.
    Due to that, I just export the database object.
    When you want to change to a real DB, you should export only the connection variable and no function.
    All APIs to access to the DB should be specified in distict JS files according to the model that each file is representing.
*/
var database = {
    users: [
        {
            userID: 1,
            email: "abc@example.com",
            password: "123456",
            name: "Anthony",
            role: "student"
        },
        {
            userID: 2,
            email: "def@example.com",
            password: "654321",
            name: "Bobby",
            role: "financer"
        }
    ],
    books: [],
    logs: []
};


module.exports = database;