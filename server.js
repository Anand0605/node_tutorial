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

app.get('/anand',function(req, res){
  res.send("welcome anand ")
})

app.get('/noida', (req, res)=>{
  res.send("welcome to noida")
})

app.get('/students',(req, res)=>{
  var student_list = {
    name: "Anand Kumar Gautam",
  age: 22,
  gender: "Male",
  course: "B.Tech Electrical Engineering",
  year: 2023,
  university: "Varanasi University",
  hobbies: ["Coding", "Solving politics-related issues", "Reading"],
  }
  res.send(student_list)
})
  


app.listen(3000, ()=>{
  console.log("server is leaving 3000")
})





