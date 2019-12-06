import express from 'express';
import cors from 'cors';
import errorHandler from "./middlewares/errorHandler";
import router from "./router";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use( errorHandler );

app.listen(PORT);

