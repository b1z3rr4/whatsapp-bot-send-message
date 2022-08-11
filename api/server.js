import express from "express";
import cors from 'cors';
import { initServer, sendMessage } from './app.js';

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'POST');
    next();
});
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res)=>{
    const { phone, text } = req.body;

    try {
        await sendMessage(phone, text);
        res.status(200).send('Mensagem enviada')
    } catch (e) {
        res.status(500).send(e);
    }
})

app.listen(5000, ()=>{
    initServer();
});