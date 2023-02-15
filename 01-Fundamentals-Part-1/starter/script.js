let js = "amazing";
if (js === "amazing") alert("JavaScript is Fun!");

let firstName = "Yetunde";
let age = 23;
let school = true;
let masters;
let phd = null;

console.log(typeof school);

/* Notes
A value is a piece of data. It is the most fundamental unit of information that we  have in programming.

Naming Variables .
variable names cannot start with a number 
variable names can only contain numbers , letters, underscores or the dolllar sign.
Always write your variables with camel casing.
Don't use reserved keywords as variable name e.g(name)
Don't start a variable name with an Uppercase letter
write constants with upper case later
Make sure your variable names are descriptive(EASY TO UNDERSTAND).
Do this:
let myFirstJob = "Programmer";
let mySecondJob = "Teacher";

Don't do this
job1 = "Teacher";
job2 = "programmer";


Primitive Data Types 
Number: FLoating point numbers (Use for decimals and integers) let age = 23;
String: Sequence of characters (Used for Text) let firstname = "Jonas";
Boolean: Logical type that can only be true or false (Used for taking decisions)let fullAge = true;
undefined: value taken by a variable that is not yet defined(empty value) let children;
Null: Also means 'empty value'
Symbol (ES2015): value that is unique and cannot be changed.
BgInt(ES2020): Larger Integers than the Number can hold. 

Note that it is the value that holds the data type not the variable

Let, Const and Var Variables

Let and var variables can be redeclared i.e (mutable) but const cannot be redeclared i.e (immutable)

let age = 30;
age = 34;

const P! = 3.141234

var mybirthday = 'September'
myBirthday = 'August 20'

Basic Operators in Javascript

Math operator
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

Typeof operator

const lastName = "Schmedtmann";
console.log(typeof lastName);



*/
