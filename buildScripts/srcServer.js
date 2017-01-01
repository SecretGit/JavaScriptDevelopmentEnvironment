/**
 * Created by jl
 */
/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open  from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

// integrate webpack with expressjs
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName": "Smith","email":"info@info.com"},
    {"id": 2,"firstName":"Bob2","lastName": "Smith2","email":"info2@info.com"},
    {"id": 3,"firstName":"Bob3","lastName": "Smith3","email":"info3@info.com"},
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port );
  }
});
