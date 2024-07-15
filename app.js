require("dotenv").config();
const express=require('express');
const mongoose=require('mongoose');

const port=process.env.PORT ||8080;
const dbUserName = process.env.dbUserName;
const dbPassword = process.env.dbPassword;

const app=express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const homePageRoute=require('./routes/homePage-route');

app.use('/',homePageRoute)

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