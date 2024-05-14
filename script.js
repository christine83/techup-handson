var age =20;
age = 65
var username = "Christine";
var password = "Techup";

var isMale = false;
var isLoggedIn = false;

var blog_posts = ["Quiz Day!", "Work day!", "Countdown!"]

console.log(age);
console.log(username);
console.log(password);
console.log(isMale);
console.log(isLoggedIn);
console.log(blog_posts);

if(isMale==true){
    console.log("I am Male");
}
else{
    console.log("I am Female");
}

while(age<70){
    console.log("Your age is " + age);
    age= age +1;
}

function sayHello(){
    alert("Hello Everyone!");
}