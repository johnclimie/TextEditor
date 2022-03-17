const path = require('path');

// Directs to index.html for home url
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
