const express = require('express'),
         cors = require('cors'),
    apiRouter = require('./routes');
         
let app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);


app.listen(3000);