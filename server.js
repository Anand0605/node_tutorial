// console.log("server file is running")

// function add(a,b){
//     return a + b;
// }
// var result =add(2,9)
// console.log(result)

// const add =(a,b)=>{return a+b;}
// const result = add(4,5)
// console.log(result)

// (function(){
//     console.log("Anand added")
// })();
// function callback(){
//     console.log("Anand is calling is callback function")
// }
// const add = function(a,b, callback){
//     var result = a + b;
//     console.log("result:"+result) 
//     callback();
// }
// add(4,5, callback)

// var fs = require("fs")
// var os = require('os')

// var user = os.userInfo();
// console.log(user.username)


// fs.appendFile('greeting.txt','Hi' + user.username + '!\n',()=>{
//     console.log("file is created")
// })

// console.log(os)
// console.log(fs)

// const notes = require('./notes.js')
// console.log("node file is loaded")
// var _ = require('lodash')

// var age = notes.age;
// console.log(age)

// var result = notes.addNumber(age+15,10)
// console.log("result is now " + result)

// var data = ["person","person","1","2","1","2","age"]
// var filter = _.uniq(data)
// console.log(filter);

// const jsonString = '{"name": "Anand Kumar Gautam", "age": 23, "city": "Varanasi", "skills": ["React.js", "Next.js", "Tailwind CSS"]}';
// const jsonObject = JSON.parse(jsonString);

// console.log(jsonObject);

// const jsonObject = {
//     name: "Anand Kumar Gautam",
//     age: 23,
//     city: "Varanasi",
//     skills: ["React.js", "Next.js", "Tailwind CSS"]
//   };
//   const jsonString = JSON.stringify(jsonObject);

// console.log(jsonString);

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)





