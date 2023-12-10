import express from 'express';
import path from 'path';
import { logger } from './middlewares.js';
import serverRoutes from './routes/workers.js';

const portNumber = 3000;
const __dirname = path.resolve();
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'templates'));

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use(serverRoutes);

app.get('/', (request, response) => {
  response.render('index', { title: 'Main page', active: 'main' });
});

app.get('/other', (request, response) => {
  response.render('other', { title: 'Other page', active: 'other' });
});

app.listen(portNumber, () => {
  console.log('Server started...');
});
