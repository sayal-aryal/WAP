const express= require('express');
const path= require('path')

const productRouter = require('./routes/product-routes');
const userRouter = require('./routes/user-routes');

let app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.use('/product',productRouter);
app.use('/user',userRouter);

//error handling middleware
app.use(function (error, req, res, next) {
    console.log("inside 404 page not found")
    res.status(500).sendFile(path.join(__dirname, 'views','404.html'));
});

app.get('/', (req, res) => {
    console.log('inside main page.' )
    res.sendFile(path.join(__dirname, 'views','index.html'));
  });

  app.get('/add-product', (req, res) => {
    console.log('inside add-product page.' )
    res.sendFile(path.join(__dirname, 'views','addproduct.html'));
  });

  app.get('/add-user', (req, res) => {
    console.log('inside add-user page.' )
    res.sendFile(path.join(__dirname, 'views','adduser.html'));
  });



//eror handling middleware
app.use(function(error,request,response,next){
    response.status(500).send('Something went wrong')
})

app.listen(3000,() => console.log('listening on 3000...'));

