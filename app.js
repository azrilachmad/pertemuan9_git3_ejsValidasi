const express = require("express");
const app = express();
const port = 3000;

// Use EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  cont = [
    {
      name: "Azril",
      email: "azril@gmail.com",
    },
    {
      name: "Ujang",
      email: "ujang@gmail.com",
    },
    {
      name: "Udin",
      email: "udin@gmail.com",
    },
  ];
  res.render('index',
  {
    nama : 'Mamang',
    title: 'Webserver EJS',
    cont: cont
  })
});

app.get("/about", (req, res) => {
  // res.send('Halaman About')
  // res.sendFile('./about.html', {root: __dirname})
  res.render("about");
});

app.get("/contact", (req, res) => {
  // res.send('Halaman Contact')
  // res.sendFile('./contact.html', {root: __dirname})
  res.render("contact");
});

app.get("/product/", function (req, res) {
  // res.send(`Product id : ${req.query.id} <br> category : ${req.query.category}`)
  res.render("product");
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Not Found : 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
