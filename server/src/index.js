import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use( (req,res,next) => {
    console.log("A-A-A-A-A-A-A-A-A-A-A-A-A");
} )

console.log("=======================>HERE");

app.listen(PORT);

