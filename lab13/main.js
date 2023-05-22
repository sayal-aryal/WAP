const express = require('express');
const app = express();

const bookRouter = require('./route/bookRouter');


app.use(express.json());
app.use('/books',bookRouter);


// Start the server
app.listen(3005, () => {
  console.log('Server is running on port 3005');
});