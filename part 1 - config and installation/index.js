import express from 'express';
//import express from express

//create a constant since we will never need to change any app's values
//plus it is es6 feature
const app = express();

//now we need to create a base server 
app.get('/', (req, res) => {
    res.send('GraphQL is badass!' );
})

//now we need to set up a listening port where will app / express will be listening on
// down below we are telling the server once you come alive throw a conssole log that it is running 
app.listen(8080, () => console.log("the server is running"));