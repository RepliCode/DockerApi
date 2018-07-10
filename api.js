const express = require('express')
const app = express()
const morgan = require('morgan');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const port = process.env.PORT || 3000

app.use(morgan('dev'));

// body parsing middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
next();
});

function runCodeSnippet(code) {
  return new Promise(((resolve,reject) => {
    exec(`node evaluation.js "${code}"`,{timeout: 5000}, (err, stdout, stderr) => {
      if(err !== null) {
        console.log(stderr)
        const outPut = stderr !== '' ? stderr : 'Your code timed out.'
        reject(outPut)
      }
      resolve(stdout)
    })
  }))
}



app.get('/', (request, response) => {
  response.send('Nothing to see here!')
})

app.post('/', async (request, response, next) => {
    const code = request.body.code.replace(/["]/g, "'");
    try {
      const evaluation = await runCodeSnippet(code);
      response.json(evaluation);
    } catch (err) {
      response.json(err);
    }
  })

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})