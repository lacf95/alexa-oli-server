const Express = require('express');
const Compression = require('compression');
const BodyParser = require('body-parser');
const Logger = require('morgan');
const Helmet = require('helmet');

const app = Express();

const port = process.env.PORT || 3000;

app.use(Helmet());
app.use(Compression());
app.use(Logger('dev'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post('/menu', (req, res) => {
  console.log(req.body);
  res.send('ok');
});

app.listen(port);
