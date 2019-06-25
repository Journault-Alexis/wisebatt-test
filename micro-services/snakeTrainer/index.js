const express = require('express')
const cors = require("cors");
const app = express()


app.use(cors());

app.get('/api/python/', (req, res) => {

    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['./script/WB_SCRIPT.py']);

    pyProg.stdout.on('data', function(data) {
        console.log(data.toString());
        res.send(data);
     
    });
})

app.listen(3904, () => console.log('Application listening on port 3904!'))