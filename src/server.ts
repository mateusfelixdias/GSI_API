import cors from 'cors';
import { env } from './env';
import express from 'express';
import { routes } from './routes';
import { connect } from './database';

const app = express();

connect();
app.use(cors());
app.use(express.json());
app.use(routes);

const port = env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
