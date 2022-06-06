// let frontendForm = document.querySelector("#user_form_data");

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
	let username = document.querySelector(".abc").value;
	let email = document.querySelector("#user_email").value;
	let contact = document.querySelector("#user_contact").value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("contact",contact);

    console.log(localStorage.getItem("username"))
});

// let school = "Bhavans Vidya Mandir";

// const obj1 = {
//     //key:value
//     name:"abc",
//     age:20,
//     eligibility:true,
//     last_name:"xyz",
//     school //school:school

// };

// const person1 = {
// 	name: "Abc",
// 	age: 20,
// 	profession: "Web Dev",
// 	greet: function () {
// 		console.log(`Hello, My name is ${this.name} and I am ${this.age} yrs old.`);
// 	},
//     sayGoodbye:(a)=>{
//         console.log(`${a} is passed as an argument!`);
//     }
// };

// function sum(a,b){
// //code
// };

// let sum = (a,b)=>{
//     //code
// }

// person1.greet();
// person1.sayGoodbye("Pratik");

// let arr1 = [];
// Array
// Number
// String

// console.log(obj1.school);

// let myMethods = {
//     concatinator:function(a,b){
//          console.log(a+b);;
//     },
// };

// myMethods.concatinator("abc", "xyz");

// const obj1 = {
// 	name: "abc",
// 	age: 20,
// 	male: true,
// 	lastname: "xyz",
// };

// const obj2 = {
// 	contact: 12235457,
// 	address: "ajshdgf ahsgfdasfd afhaf",
// };

// const obj3 = {
// 	...obj1,
// 	...obj2,
// };
// console.log(obj3);

// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [7, 8, 9, ...arr1, 10];
// const arr3 = [...arr1, ...arr2];
// console.log(arr2[1]);
// console.log(Object.values(obj1));
// console.log(Object.keys(obj1));



// const arr1 = [1,2,3,4,5];
// arr1[2] = "Pratik";
// console.log(arr1);


const obj1 = {
	name: "abc",
	age: 20,
	male: true,
	lastname: "xyz",
};

delete obj1.lastname;
console.log(obj1);
