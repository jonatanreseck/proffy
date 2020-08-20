import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json()); //para receber e usar json no express
app.use(routes);

app.listen(3333);