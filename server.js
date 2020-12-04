// preemptive file
// The Heroku Guide should help

// has to be set up as an express server

// dependencies
const express = require("express");
const app = express();
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");