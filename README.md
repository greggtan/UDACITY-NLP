This is my fourth UDACITY project, which is utilising a natural language processing API. My platform has 2 options: Sentiment analysis and Summarization. Users will be able to choose which API they would like to use.

For Sentiment analysis, users are to enter a sentence, and using the Aylien API more in depth information on the sentiment of that statement will be provided in the "results" section.

For Summarization, users are to enter 2 things: 
1. a URL of the article they want to summarize
2. The number of sentences their summary is.
The Aylien API will take these 2 data as input and produce the corresponding summary lines.


UDACITY REVIEWER GUIDE:
Step 0: Please install node (npm install), and ALL the plugins in BOTH my prod and dev config files, and all the extra stuff in my server (cors,body-parser,aylien api etc)
Step 1:Start up server "npm start" in console (my server is on port 8081!)
Step 2:Choose to build development or production mode
- To run development mode, enter "npm run build-dev" in console (my script will open up the next available port.)
- To run production mode, enter "npm run build-prod" in console, followed by going to localhost:8081/

Step 3: Test out APIs! (input is up to you)
- For sentiment analysis, test code can be: "I am happy"
- For Summarization, test url can be: http://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate,
Number of sentences can be: 3
