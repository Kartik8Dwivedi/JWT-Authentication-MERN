const express = require('express')
const authRouter = require('./router/authRoute')
const databaseConnect = require('./config/databaseConfig.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

databaseConnect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true, //this is for setting up transfer of cookies
  })
);

app.use(cookieParser())
app.use(express.json())


app.use('/api/auth', authRouter)

app.use('/', (req,res) => {
    res.status(200).json({
        data: "JWTAuth server"
    })
})

module.exports = app