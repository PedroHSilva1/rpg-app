import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

routes(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});