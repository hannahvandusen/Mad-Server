const express = require('express'); 
const app = express(); 
const PORT = 4000; 
const firstWord = require('./controllers/first-word');
const secondWord = require('./controllers/second-word');

app.use(express.urlencoded({extender: true})); 

app.use('/first-word', firstWord); 
app.use('/second-word', secondWord); 



app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
}); 