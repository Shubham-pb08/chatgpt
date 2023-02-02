const openAi = require('openai')
const { Configuration, OpenAIApi } = openAi;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-6Ojdts1joSXMPKMWlbzxPcvA",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());
app.post('/',async (req,res)=> {
    const {message} = req.body;
    console.log(message);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: ` ${message}`,
        max_tokens: 1000,
        temperature: 0,
    });

    if(response.data) {
        if(response.data.choices) {
            res.json({
                message: response.data.choices[0].text
            })
        }
    }
});

app.listen(port, ()=> {
    console.log("Example is running good");
})

app.get('/', (req,res)=> {
    console.log("Example is running good");
    res.send('hey there');
})
