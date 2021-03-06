require("dotenv").config();
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;



// Middleware
// code to be added
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("dist"));
app.use(express.static('public'));
app.use(express.static('uploads'));


// var syncOptions = { force: false };
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
module.exports = app;