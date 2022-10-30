const express = require('express')
const {CurrentRoute,ForecastRoute,UrlRoute} = require('./routes/');
const app = express();
const connectDb = require('./config/db')
const cors = require('cors');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use("/current",CurrentRoute);
app.use("/forecast",ForecastRoute);
app.use("/url",UrlRoute);
app.get('/', (req, res) => {
    console.log(req.body);
    res.send('hello')})

app.listen(8080, async() => {
    await connectDb();
    console.log('server started on port 8080')
})