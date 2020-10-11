import express from 'express';
import bodyParser from 'body-parser';
import {router} from './routes/loginRoutes'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(router)

app.listen(3000, ()=> {
    console.log('Application listening on port 3000')
})