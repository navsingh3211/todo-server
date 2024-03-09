import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import database from './database.js';
import routes  from './routes/todo.route.js';
const app = express();

dotenv.config('');
app.use(cors());

const PORT = process.env.PORT || 8085;
const mongoUrl = process.env.MONGO_URL

app.use(express.json())
database(mongoUrl);

app.use('/api/v1',routes());

app.listen(PORT,()=>{
  console.log(`Our app is listening on port ${PORT}`);
})
