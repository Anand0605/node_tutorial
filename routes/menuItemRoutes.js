const express = require('express')
const router = express.Router();

const MenuItem = require('./../models/MenuItem');
// const { model } = require('mongoose');

// POST route to add a new menu item
router.post('/', async (req, res) => {
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
  router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log('Menu items fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  module.exports = router;
  