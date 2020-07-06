const express = require('express'),
         cors = require('cors'),
    apiRouter = require('./routes'),
         path = require("path");
         
let app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);
app.use("/", express.static(path.join(__dirname, "../client")));


app.listen(3000);