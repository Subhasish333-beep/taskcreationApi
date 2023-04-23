const express = require('express');
const cors = require('cors');
const checkLogin = require('./common');

const app = express();

var corOptions = {
    origin: "https://localhost:8000"
}


//middlewares
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({extended : true}))

const router = require('./routes/authRoutes');
app.use('/api', router);

const workRouter = require('./routes/workRoutes');
app.use('/api', checkLogin.checkLogin, workRouter)


const PORT = 8000;

app.listen( PORT,() => {
    console.log("server running");
})