const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
  res.send('Hello World from Node.js server!');
});

app.use(express.static(path.join(__dirname, '../dist/your-angular-project')));

app.get('/angular', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/your-angular-project/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
