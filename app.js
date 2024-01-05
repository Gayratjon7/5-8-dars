// let a = "2";

// if (a === 2) {
//   console.log("Salom");
// } else {
//   console.log("Hayr");
// }

// let a  = 5 && 10 && 20

// console.log(a)

// let ism = prompt("Isminggizni kiriting");
// let familiya = prompt("Familiyanggizni kiritng");
// let id = prompt("ID raqaminggizni kiritng");

// let result = ism || familiya || id || "Iltimos ozinggzni tarnishtiring";

// alert(result);


// let user = {
//     ism: "G'ayratjon",
//     fam: "Xudoyberdiyev",
//     age: 18
// }
// const prop = prompt("yozing")

// alert(user[prop])



// let user = {
//     ism: "G'ayratjon",
//     fam: "Xudoyberdiyev",
//     age: 18
// }

// const {age, fam } = user

// console.log(user.age)


let arr = [1 , 2 , 3]

function sum( a,b, ...nums){
    return nums.reduce((acc, num) => acc + num, 0)
}
let arr3 = [1,2,3,4,5]
console.log(sum(1,2,3,4,5))
const [ a,b, ...qolgani] = arr3

