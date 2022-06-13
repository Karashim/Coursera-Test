document.addEventListener("DOMContentLoaded",
function (event){
    console.log(event);
    //document.querySelector("content").textContent = "Type your name and press the button."

    //This logs the mouse's x and y coordinates if the shift key is pressed.
    document.querySelector("body").addEventListener("mousemove",
    function (event){
        if(event.shiftKey == true){
        console.log("X: " + event.clientX);
        console.log("Y: " + event.clientY);
        };
    });
}
);

var x=5;
var y=7;

function compare(num1,num2){
    return num1 < num2;
}

console.log(compare(x,y));

// var sum = 0;
// for(var i = 0; i < 10; i++){
//     console.log("i= " + i);
//     sum = sum + i;
//     console.log("sum= " + sum);
// }
// console.log(sum);

//Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstname = "Mark";
company.ceo.lastname = "Markenson"

console.log(company);
console.log("Company CEO name is " + company.ceo.firstname + " " + company.ceo.lastname );
console.log(company["name"]);

company["Stock of company"] = 110;
console.log(company["Stock of company"]);

//Object Literal
var facebook = {
    name: "Facebook",
    CEO: {
        firstname: "Mark",
        lastname: "Markenson"
    },
    "Stock of company": 110
};
console.log(facebook.name);

//Functions are First-Class data types and Objects
function makeMultiplier(multiplier){
    var myFunc = function(x){
        return multiplier * x;
    };//end myFunc
    return myFunc;
}//end makeMultiplier

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

function doOperationOn(x, operation){
    return operation(x);
}
var result = doOperationOn(10, multiplyBy3);

//Function Constructor
function Circle(radius){
    this.radius = radius;
}

Circle.prototype.getArea =
function(){
    return Math.pi * Math.pow(this.radius, 2);
}

var myCircle = new Circle(10); //new Object();
console.log(myCircle);

var otherCircle = new Circle(20);
console.log(otherCircle);

//Immediatley Invoked Function Expression IIFE
(function(name) {
    console.log("Hello " + name)
}) ("Ian");

console.log(document.getElementById("title"));

function sayHello(){

    console.log(document.getElementById("name").value);
    var name = document.getElementById("name").value;
    var message = "Hello " + name;
    message = "<h2>Hello " + name + "</h2>";

    if (name === "student" || name === " Student"){
        var title = document.querySelector("#title").textContent;
        title += " Student";
        document.querySelector("#title").textContent = title;
    }
    else{

    document.getElementById("content").textContent = message; //will interpret the tags as a string.
    document.getElementById("content").innerHTML = message; //will interpret the tag.

    }

}

//Unobtrusive event binding
// document.querySelector("button").addEventListener("click", sayHello);
// document.querySelector("button").onclick = sayHello;
//These both add the onclick property to the button tag without it being in the html document.
//Both change the .this object to point from the window to the button element.
//can use this.textContent = "Text"; to change the value of the new this object.