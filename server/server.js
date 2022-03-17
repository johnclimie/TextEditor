// Uses express for routing
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Uses routes folder to setup routing
require('./routes/htmlRoutes')(app);

// Server listener
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
