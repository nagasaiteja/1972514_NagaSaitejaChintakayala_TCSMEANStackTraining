const prompt = require('prompt-sync')();
 
const fname = prompt('Please Enter your First name   ');

const lname = prompt('Please Enter your Lastname  ');

const gender= prompt('Please Enter your Gender  ');

const email= prompt('Please Enter your email id   ');



var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});



  log_file.write(util.format(fname) + '\t');
 log_file.write(util.format(lname) + '\t');
 log_file.write(util.format(gender) + '\t');
 log_file.write(util.format(email) + '\n');


let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();



fs.appendFileSync('logger.txt', fname);
fs.appendFileSync('logger.txt', '\t');

fs.appendFileSync('logger.txt', lname);
fs.appendFileSync('logger.txt', '\t');

fs.appendFileSync('logger.txt', gender);
fs.appendFileSync('logger.txt', '\t');

fs.appendFileSync('logger.txt', email);
fs.appendFileSync('logger.txt', '\t');


fs.appendFileSync('logger.txt',year + "-" + month + "-" + date);
fs.appendFileSync('logger.txt', '\n');

console.log("Please check the logger file for the updated records");
