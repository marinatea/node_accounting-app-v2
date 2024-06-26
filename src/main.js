/* eslint-disable no-console */
'use strict';

const { createServer } = require('./createServer');

const PORT = process.env.PORT || 3000;

const app = createServer();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app };
