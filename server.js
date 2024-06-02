import express from 'express';
import recordRouter from './routes/record.js'; // Update this path if necessary

const app = express();
const port = 80;

app.use(express.json());
app.use('/', recordRouter);

app.use('/messages', recordRouter);
app.use('/messages/aggregate', recordRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
