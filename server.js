// preemptive file
// The Heroku Guide should help

// has to be set up as an express server

// dependencies
const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

// express data stuff (its parsing, just in case)
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const app = express();
app.use(express.static(path.join(_dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// linking above-said routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

module.exports = app;

// SERVER PORT PLEASE REMEMBER
const PORT = process.env.PORT || 8080;


app.listen(PORT, function () {
    console.log(`PORT ${PORT} watching your every step`);
});