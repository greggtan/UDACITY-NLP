var path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());

const mockAPIResponse = require('./mockAPI.js')
//to make our keys info private
const dotenv = require('dotenv');
dotenv.config();



app.use(express.static('dist'))


// designates what port the app will listen to for incoming requests
app.listen(2022, function () {
    console.log('Example app listening on port 2022!')
})


var aylien = require("aylien_textapi");
// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//sentiment analysis api call
app.post('/sentiment', function (req, res) {
    let myText = req.body.text;
    console.log(myText);
    textapi.sentiment({
        //change text to take from user input
        'text': myText
    }, function (error, response) {
        if (error === null) {
            console.log(response);
            let sentimentAnalysis = response;
            res.send(sentimentAnalysis);
        }
    });
})


app.post('/summary', function (req, res) {
    let summaryURL = req.body.summaryURL;
    let sentenceNum = req.body.sentenceNum;
    //after getting our 2 required data, call api
    textapi.summarize({
        'sentences_number':sentenceNum,
        'url':summaryURL
    }, function(error,response){
        if (error === null) {
            console.log(response);
            let summary = response;
            res.send(summary);
        }
    })
});