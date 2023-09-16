const express = require('express');
const erromiddleware = require('./middleware/Error');
const { dashboardRoute, productsRoute } = require('./router/routes');
const app = express();


app.use('/',dashboardRoute);
app.use('/',productsRoute)

app.listen(5000,() => {
    console.log(`server port 5000`)
})


app.use(erromiddleware); //middleware