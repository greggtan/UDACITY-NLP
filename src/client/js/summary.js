async function performSummary(e) {
    let summaryObject = {
        summaryURL:document.getElementById('summaryURL').value,
        sentenceNum:parseInt(document.getElementById('sentenceNum').value)
    };
    const summaryData = await Client.postDataToServer('http://localhost:2022/summary',summaryObject);

    //remove whatever is in results section
    let resultsSection = document.getElementById('resultsSection');
    let resultsDiv = document.getElementById('results');
    
    if (resultsDiv !== null){
        resultsDiv.remove();
    };

    //dynamically add new div with all the data from API
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id','results');

    let sentenceArray = summaryData.sentences;
    for (let i =0; i<sentenceArray.length;i++){
        let newLine = document.createElement('p');
        newLine.innerText = `line ${i+1} : ${sentenceArray[i]} \n`;
        newDiv.appendChild(newLine);
    }
    resultsSection.appendChild(newDiv);
};

export{performSummary};