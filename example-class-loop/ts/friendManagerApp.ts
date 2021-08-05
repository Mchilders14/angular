import { Friend } from "./friend";

let friend1: Friend = new Friend("Kendelle", 24, "kendelleCraig@icloud.com", true)
let friend2: Friend = new Friend("Caleb", 24, "zercmon@gmail.com", true)
let friend3: Friend = new Friend("Andy", 24, "prickl@gmail.com", true)
let friend4: Friend = new Friend("Dylan", 24, "dylanM@gmail.com", true)
let friend5: Friend = new Friend("Seth", 24, "sethrace@gmail.com", true)

let friend:Friend[] = [friend1, friend2, friend3, friend4, friend5];

console.log("List of Friends: ");
console.log("Name", "Age", "Email", "BFF");

friend.forEach(f => {
    console.log(f.name, f.age, f.email, f.bff);
});