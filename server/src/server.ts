import express from 'express';
//40 min
const app = express();

app.get('/users', (request, response) => {
    const data =[
        {
            "nome": "jonatan"
        }
    ]
    return response.json([data]);
});

app.listen(3333);