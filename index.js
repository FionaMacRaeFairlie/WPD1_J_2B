const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "public");
app.use(express.static(public));

app.get("/", function (req, res) {
  res.sendFile(path.join(public, "index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(public, "about.html"));
});
app.get("/info", function (req, res) {
  res.sendFile(path.join(public, "information.html"));
});
// app.get("/contact", function (req, res) {
//   res.sendFile(path.join(public, "contact.html"));
// });

app.use(function (req, res) {
  res.status(404);
  res.sendFile(path.join(public, "error.html"));
});
app.use(function (req, res) {
  res.status(404);
  res.send("Oops! We didn't find what you are looking for.");
});


app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^c to quit.");
});
