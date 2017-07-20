'use strict';
// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Public route
app.get('/api/products', (req, res)=>{
  let products = [
    

 {
    id: 1,
    name: 'violet frock',
    // description: 'Description of Product',
    originalPrice: 1400.00, // Original price of product
   
},

 {
    id: 2,
    name: 'orange t-shirt',
    // description: 'Description of Product',
    originalPrice: 400.00, // Original price of product
   
},

 {
    id: 3,
    name: 'blue skirt',
    // description: 'Description of Product',
    originalPrice: 350.00, // Original price of product
   
},

 {
    id: 4,
    name: 'yellow t-shirt',
    // description: 'Description of Product',
    originalPrice: 300.00, // Original price of product
   
},

 {
    id: 5,
    name: 'pink frock',
    // description: 'Description of Product',
    originalPrice: 1500.00, // Original price of product
   
}

  ];
  res.json(products);
})



app.listen(3001);
console.log('Serving products on localhost:3001');