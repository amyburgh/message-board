import express from 'express';
import path from 'path';
import indexRouter from './routes/index.js';
import newRouter from './routes/new.js';
// import { messages } from './db.js';

const app = express();
const __dirname = path.resolve();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);

// 404 error handling
app.use((req, res, next) => {
  res.status(404).send('404: Page Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
