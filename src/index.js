const express = require('express');
const bodyParser = require('body-parser');
const natural = require('natural');
const AFINN  = import('afinn-165');

// Initialize Express app
const app = express();

// Set up AFINN sentiment analyzer
const afinn = new AFINN();

// Use bodyParser middleware to parse request body
app.use(bodyParser.json());

app.get('/healthcheck', (req, res) => {
    res.status(200).send('OK');
});

// Define endpoint for sentiment analysis
app.post('/analyzeSentiment', (req, res) => {
  const text = req.body.text;
  
  // Tokenize text into individual words
  const tokenizer = new natural.WordTokenizer();
  const words = tokenizer.tokenize(text);
  
  // Calculate sentiment score using AFINN-165 word list
  let sentimentScore = 0;
  words.forEach(word => {
    if (afinn.hasOwnProperty(word)) {
      sentimentScore += afinn[word];
    }
  });
  
  // Determine sentiment based on score
  let sentiment = 'neutral';
  if (sentimentScore > 0) {
    sentiment = 'positive';
  } else if (sentimentScore < 0) {
    sentiment = 'negative';
  }
  
  // Analyze emotions using natural library
  const emotions = {};
  const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
  const emotionCategories = ['joy', 'anger', 'fear', 'sadness', 'surprise'];
  emotionCategories.forEach(category => {
    const emotionScore = analyzer.getSentiment(words, category);
    emotions[category] = emotionScore;
  });
  
  // Return response with sentiment and emotions
  res.json({
    sentiment,
    emotions
  });
});

// Start server
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server started on port ' + port);
});