// preemptive file
// The Heroku Guide should help

// has to be set up as an express server

// dependencies
const express = require("express");
const app = express();
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// SERVER PORT PLEASE REMEMBER
const PORT = process.env.PORT || 8080;

// express data stuff (its parsing, just in case)
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(_dirname, 'public')));