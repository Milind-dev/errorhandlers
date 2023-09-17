const express = require('express');
const erromiddleware = require('./middleware/Error');
const connection = require("./config/database")
const { dashboardRoute, productsRoute, recipeApisRoute,recipeRegisterRoute, recipeLoginRoute } = require('./router/routes');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();
connection();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/',dashboardRoute);
app.use('/',productsRoute)
app.use('/',recipeApisRoute)
app.use('/',recipeRegisterRoute)
app.use('/',recipeLoginRoute)


app.use(erromiddleware); //middleware

app.listen(5000,() => {
    console.log(`server port 5000`)
})