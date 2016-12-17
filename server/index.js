import 'babel-polyfill';
import express from 'express';



const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
import mongoose from 'mongoose'
import Cheese from '../models/cheese'

const dbUrl= 'mongodb://cheese:cheese@ds037814.mlab.com:37814/cheese'
mongoose.connect(dbUrl)

app.use(express.static(process.env.CLIENT_PATH));


// const cheeses = [
//     "Bath Blue",
//     "Barkham Blue",
//     "Buxton Blue",
//     "Cheshire Blue",
//     "Devon Blue",
//     "Dorset Blue Vinney",
//     "Dovedale",
//     "Exmoor Blue",
//     "Harbourne Blue",
//     "Lanark Blue",
//     "Lymeswold",
//     "Oxford Blue",
//     "Shropshire Blue",
//     "Stichelton",
//     "Stilton",
//     "Blue Wensleydale",
//     "Yorkshire Blue"
// ]

app.get('/cheeses', (req, res) => {
    Cheese.find({}, (err, cheeses) => {
        if(err){
            res.send(err)
        }
        res.status(200).json(cheeses[0].cheese)
        console.log('get request from server file calling in db: getting all cheeses');
        console.log(req.body)
    })
})

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}


