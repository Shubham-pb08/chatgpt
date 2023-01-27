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
        max_tokens: 100,
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
