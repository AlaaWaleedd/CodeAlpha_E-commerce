require("dotenv").config();
const express=require('express');
const path = require('path');
const mongoose=require('mongoose');

const port=process.env.PORT ||8080;
const dbUserName = process.env.dbUserName;
const dbPassword = process.env.dbPassword;

const app=express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const homePageRoute=require('./routes/homePage-route');
const productsPageRoute=require('./routes/products-route');
const livingRoomsRoute=require('./routes/livingRooms-route');
const diningRoomsRoute=require('./routes/diningRooms-route');
const nightstansRoute=require('./routes/nightstands-route');
const wardrobesRoute=require('./routes/wardrobesPage-route');
const dressersPageRoute=require('./routes/dressersPage-route');
const aboutUsRoute=require('./routes/about-us-route');

app.use('/',homePageRoute);
app.use('/products',productsPageRoute);
app.use('/livingRooms',livingRoomsRoute);
app.use('/diningRooms',diningRoomsRoute);
app.use('/nightstands',nightstansRoute);
app.use('/wardrobes',wardrobesRoute);
app.use('/dressers',dressersPageRoute);
app.use('/about-us',aboutUsRoute);

const dbURL=`mongodb+srv://${dbUserName}:${dbPassword}@cluster0.vlovamp.mongodb.net/codeAlpha?retryWrites=true&w=majority&appName=cluster0`;

mongoose
    .connect(dbURL)
    .then(() => {
        console.log('Connected to database successfully!');
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
    .catch((error) => {
        console.log('Failed to connect to the database!');
        console.error(error);
    });