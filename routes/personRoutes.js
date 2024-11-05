const express = require('express')
const router = express.Router();
const Person = require('./../models/person');


router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log('Person data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/:workType',async(req,res)=>{

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

  module.exports = router;