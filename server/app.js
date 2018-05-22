/*
 |--------------------------------------------------------------------------
 | Require Dependencies
 |--------------------------------------------------------------------------
 */
const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  morgan = require('morgan'),
  characterApi = require('./api/characterApi'),
  port = process.env.PORT || 8000;
application = express();



/*
|--------------------------------------------------------------------------
|  Middleware
|--------------------------------------------------------------------------
*/
// Register `hbs.engine` with the Express app.
// application.engine('handlebars', handlebars({ defaultLayout: 'main' }));
// application.set('view engine', 'handlebars');


application.use(morgan('dev'));
// application.use(morgan('combined'))


// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
application.use(bodyParser.json());



// Express will allow requests from port 8080
// 8080 needs access to our json data
application.use(cors({
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}));




// Api
application.use('/api/v1/character', characterApi);






/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/
application.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});