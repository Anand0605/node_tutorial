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
const db = require('./db')

const bodyParser= require('body-parser');
app.use(bodyParser.json())

const Person = require('./models/person');
const MenuItem = require('./models/MenuItem');

// Route to serve home page
app.get('/', function (req, res) {
  res.send('Hello World');
});

// POST route to add a new person
app.post('/person', async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains person data
    const newPerson = new Person(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log('Person data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET route to retrieve all persons
app.get('/person', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('Person data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST route to add a new menu item
app.post('/menu', async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains menu item data
    const newMenuItem = new MenuItem(data);

    // Save the new menu item to the database
    const response = await newMenuItem.save();
    console.log('Menu item saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET route to retrieve all menu items
app.get('/menu', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('Menu items fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/person/:workType',async(req,res)=>{

  try{
    const workType = req.params.workType; // extract the work type from the url parameter
    if(workType=='chef'|| workType=='manager'|| workType=='waiter'){
      
      const response = await Person.find({work:workType});
      console.log('response fetched');
      res.status(200).json(response)

    }else{
      res.status(404).json({error:'invalid work type'})
    }
  }catch(err){
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


// app.get('/anand',function(req, res){
//   res.send("welcome anand ")
// })

// app.get('/noida', (req, res)=>{
//   res.send("welcome to noida")
// })

// app.get('/students',(req, res)=>{
//   var student_list = {
//     name: "Anand Kumar Gautam",
//   age: 22,
//   gender: "Male",
//   course: "B.Tech Electrical Engineering",
//   year: 2023,
//   university: "Varanasi University",
//   hobbies: ["Coding", "Solving politics-related issues", "Reading"],
//   }
//   res.send(student_list)
// })
// app.post('/chef',(req,res)=>{
//   res.send('/chef')
// })
  


app.listen(3000, ()=>{
  console.log("server is leaving 3000")
})





