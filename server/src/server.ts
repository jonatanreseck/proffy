import express from 'express';

const app = express();

app.use(express.json()); //para receber e usar json no express

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});

app.listen(3333);