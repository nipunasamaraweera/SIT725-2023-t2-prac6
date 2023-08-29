var express = require("express")
var app = express()
var bodyParser = require('body-parser')
var port = process.env.port || 3000
app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))


require('./dbConnect')
let router = require('./routes/router')


app.set('views', 'public/views');
app.set('view engine', 'ejs')

let collection;

app.use('/api/anime', router);
app.use('/', router);


app.listen(port, () => {
    console.log("App listening to : ", port)
})


