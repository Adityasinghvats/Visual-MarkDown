import express from 'express';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sharejs from 'share';
import 'redis';
import { type } from 'os';

const app = express();
const port = process.env.PORT || 3000;

 // set the view engine to ejs
app.set('view engine','ejs');

 // public folder to store assets
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
app.use(express.static(__dirname+'/public'));

app.get('/', (req,res)=>{
    res.render('pad');
})
//route with userid
app.get('/(:id)',(req,res) => {
    res.render('pad');
})

const options = {
    db : {type: 'redis'}
}

sharejs.server.attach(app, options);

app.listen(port,()=>{
    console.log('Server started')
});
