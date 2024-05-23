// app.js
const app = require('./api');
const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
