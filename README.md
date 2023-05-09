# Sentiment Analysis and Emotion Recognition API

This API uses Natural Language Processing (NLP) and machine learning techniques to analyze text and return the sentiment (positive, negative, or neutral) and emotions (such as joy, anger, fear, etc.) associated with the input. It can be used by businesses and developers to analyze customer reviews, social media posts, and online content for marketing, customer service, and product development purposes.

## Installation

To install the dependencies, run:
```
npm install
```

## Usage

To start the server, run:
```
npm start
```

The server will start listening on port 3000. You can send a POST request to the `/analyzeSentiment` endpoint with a JSON payload containing the text you want to analyze, like this:

```json
{
  "text": "I love this product! It's amazing!"
}
```

The API will return a JSON response with the sentiment and emotions associated with the input text:
```json
{
  "sentiment": "positive",
  "emotions": {
    "joy": 1,
    "anger": 0,
    "fear": 0,
    "sadness": 0,
    "surprise": 0
  }
}
```

# API Endpoint
The API has one endpoint:
```
POST /analyzeSentiment
```
This endpoint analyzes the sentiment and emotions of the input text and returns a JSON response with the results.

## Request
The request must contain a JSON payload with the following parameters:

text: the text to analyze (required)
Example request:
```json
{
  "text": "I love this product! It's amazing!"
}
```
## Response
The response is a JSON object with the following properties:

sentiment: the sentiment of the input text, which can be "positive", "negative", or "neutral"
emotions: an object with the emotions associated with the input text, where each emotion is represented by a score between 0 and 1 (inclusive)
Example response:
```json
{
  "sentiment": "positive",
  "emotions": {
    "joy": 1,
    "anger": 0,
    "fear": 0,
    "sadness": 0,
    "surprise": 0
  }
}
```
# License
This project is licensed under the MIT License - see the LICENSE file for details.
