"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_1 = require("./friend");
var friend1 = new friend_1.Friend("Kendelle", 24, "kendelleCraig@icloud.com", true);
var friend2 = new friend_1.Friend("Caleb", 24, "zercmon@gmail.com", true);
var friend3 = new friend_1.Friend("Andy", 24, "prickl@gmail.com", true);
var friend4 = new friend_1.Friend("Dylan", 24, "dylanM@gmail.com", true);
var friend5 = new friend_1.Friend("Seth", 24, "sethrace@gmail.com", true);
var friend = [friend1, friend2, friend3, friend4, friend5];
console.log("List of Friends: ");
console.log("Name", "Age", "Email", "BFF");
friend.forEach(function (f) {
    console.log(f.name, f.age, f.email, f.bff);
});
