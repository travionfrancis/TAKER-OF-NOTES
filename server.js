// preemptive file
// The Heroku Guide should help

// has to be set up as an express server

// dependencies
const express = require("express");
const app = express();
const path = require("path");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
// SERVER PORT PLEASE REMEMBER
const PORT = process.env.PORT || 8080;

// express data stuff (its parsing, just in case)
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(_dirname, 'public')));

// linking above-said routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, function () {
    console.log(`PORT ${PORT} watching your every step`);
})