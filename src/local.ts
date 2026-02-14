import app from './app';

const PORT = 4400;

app.listen(PORT, () => {
  console.log(`Server is running locally on http://localhost:${PORT}`);
});