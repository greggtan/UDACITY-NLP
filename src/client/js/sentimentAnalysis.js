async function performSentiment(e) {
    //get user input and create object  
    let myText = document.getElementById('mySentiment').value;
    let textObject = { text: myText };
    //post to server and use API to get data back
    const sentimentAnalysis = await Client.postDataToServer('http://localhost:2022/sentiment', textObject);

    let entries = Object.entries(sentimentAnalysis);

    let resultsSection = document.getElementById('resultsSection');
    let resultsDiv = document.getElementById('results');
    
    if (resultsDiv !== null){
        resultsDiv.remove();
    };
    //dynamically add new div with all the data from API
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id','results');
    for (let i = 0;i<entries.length;i++) {
        let newChild = document.createElement('p');
        newChild.innerText = `${entries[i][0]} : ${entries[i][1]}`;
        newDiv.appendChild(newChild);
    };
    resultsSection.appendChild(newDiv);
};


//allow for use in index.js
export{performSentiment};