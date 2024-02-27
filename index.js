import dotenv from 'dotenv';
dotenv.config();

import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send("hello world")
})
app.get('/nabin', (req, res) => {
    res.send("navigated to /nabin function ")
})

app.get('/login', (req, res) => {
    res.send("login page")
})

app.get('/api/jokes', (req, res) => { res.send(jokes) })

app.listen(process.env.PORT, () => {
    console.log(`serve at http://localhost:${process.env.PORT}`);
})



const jokes = {
    "jokes": [
        {
            "type": "pun",
            "question": "Why don't skeletons fight each other?",
            "answer": "They don't have the guts."
        },
        {
            "type": "one-liner",
            "setup": "I told my wife she was drawing her eyebrows too high.",
            "punchline": "She looked surprised."
        },
        {
            "type": "knock-knock",
            "setup": "Knock knock.",
            "punchline": "Who's there? Boo. Boo who? Don't cry, it's just a joke."
        },
        {
            "type": "riddle",
            "question": "What has keys but can't open locks?",
            "answer": "A piano."
        },
        {
            "type": "dad joke",
            "question": "Why don't scientists trust atoms?",
            "answer": "Because they make up everything!"
        }
    ]
}