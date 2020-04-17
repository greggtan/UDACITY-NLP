//import all js files to add to dist main.js
import {performSentiment} from './client/js/sentimentAnalysis'
import {performSummary} from './client/js/summary'



//create GET request 
const getDataFromServer = async (url) => {
    console.log(url);
    const res = await fetch(url)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};


//create POST request
const postDataToServer = async (url, data = {}) => {
    console.log(url, data);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });
    console.log(res);
    try {
        const newData = await res.json();
        // console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

//dropdown menu toggle javascript 
let menuButton = document.getElementById('dropButton');
menuButton.addEventListener('click',function(){
    let dropMenu = document.getElementById('myDropdown');
    if (dropMenu.style.display ==='none'){
        dropMenu.style.display = 'block';
    } else{
        dropMenu.style.display = 'none';
    };
});

let sentimentOption = document.getElementById('sentimentOption');
let summaryOption = document.getElementById('summaryOption');

sentimentOption.addEventListener('click',showSentiment);
summaryOption.addEventListener('click',showSummary);


function showSentiment(e){
    //clear form 
    let resultsSection = document.getElementById('resultsSection');
    let resultsDiv = document.getElementById('results');
    
    if (resultsDiv !== null){
        resultsDiv.remove();
    };
    //display selected function
    let sentimentSection = document.getElementById('sentimentSection');
    let summarySection = document.getElementById('summarySection');
    //ensure the summary section is always none
    summarySection.style.display = "none";
    //create toggle to show
    if (sentimentSection.style.display === "none"){
        sentimentSection.style.display = "block";
    }
    else{
        sentimentSection.style.display = "none";
    };
    
    
};

function showSummary(e){
    //clear form 
    let resultsSection = document.getElementById('resultsSection');
    let resultsDiv = document.getElementById('results');
    
    if (resultsDiv !== null){
        resultsDiv.remove();
    };
    //display selected function
    let sentimentSection = document.getElementById('sentimentSection');
    let summarySection = document.getElementById('summarySection');
    //ensure the sentiment section is always none
    sentimentSection.style.display = "none";
    //create toggle to show
    if (summarySection.style.display === "none"){
        summarySection.style.display = "block";
    }
    else{
        summarySection.style.display = "none";
    };
};


//run apis after user input and click
let sentimentButton = document.getElementById('sentimentButton');
sentimentButton.addEventListener('click', performSentiment);

let summaryButton = document.getElementById('summaryButton');
summaryButton.addEventListener('click',performSummary);



export {
    getDataFromServer,
    postDataToServer,
    performSentiment,
    performSummary
}

//import all sass files to add to dist main.js
import './client/styles/style.scss'




